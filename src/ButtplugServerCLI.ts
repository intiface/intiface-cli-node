/*!
 * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
 * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
 * project root for full license information.
 *
 * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
 */

import * as commander from "commander";
import * as selfsigned from "selfsigned";
import * as fs from "fs";
import * as path from "path";
import { IntifaceGuiProtocol } from "./intiface-gui-proto";
import { ButtplugLogger, ButtplugLogLevel, DeviceConfigurationManager } from "buttplug";
import { ButtplugNodeBluetoothLEDeviceManager } from "buttplug-node-bluetoothle-manager";
import { ButtplugNodeWebsocketServer } from "buttplug-node-websockets";

import * as packageinfo from "../package.json";

export class ButtplugServerCLI {

  private _wsServer: ButtplugNodeWebsocketServer | null = null;
  private _usePbOutput = false;

  public async RunServer() {
    this.BuildOptions();

    if (commander.frontendpipe) {
      this._usePbOutput = true;
      // Monkey patch stdout/stderr at this point to shove everything over our pipe.
      console.log = process.stderr.write = this.SendGuiLogMessage.bind(this);
      process.stdin.addListener("data", async (aData: Buffer) => {
        await this.OnGuiMessage(aData);
      });
      console.log(`Server using protobuf based output.`);
    } else {
      console.log(`Server using string based output.`);
      this.LogToConsole();
    }

    if (commander.serverversion) {
      this.PrintVersion();
      return;
    }

    if (commander.generatecert) {
      this.GenerateCertificate(commander.generatecert);
      return;
    }

    // If we are passed a device configuration file, use that. Otherwise, use
    // the one built into the library.
    if (commander.deviceconfig) {
      DeviceConfigurationManager.LoadFromJsonExternalConfig(commander.deviceconfig);
    } else {
      DeviceConfigurationManager.LoadFromInternalConfig();
    }

    // Load an outside Configuration
    //
    // TODO Not yet implemented in Buttplug
    //
    // if (commander.userdeviceconfig) {
    //   DeviceConfigurationManager.Manager.LoadUserConfiguration(commander.userdeviceconfig);
    // }
    if (commander.userdeviceconfig) {
      throw new Error("User device configuration not currently implemented in this engine.");
    }

    if (!commander.wsinsecureport && !commander.wssecureport && !commander.ipcserver) {
      console.log("Must specify either Websocket secure or insecure port, or IPC server.");
      return;
    }

    if (commander.wssecureport && (!commander.wscertfile || !commander.wsprivfile)) {
      console.log("Must specify cert and privkey files for for secure websockets.");
      return;
    }

    // If we get this far, we'll at least try running a server, so set up
    // exit/Ctrl-C routes.
    this.SetupExit();

    if (this._usePbOutput) {
      this.SendMessage(IntifaceGuiProtocol.ServerProcessMessage.create({
        processStarted: IntifaceGuiProtocol.ServerProcessMessage.ProcessStarted.create(),
      }));
    }

    if (commander.wsinsecureport || commander.wssecureport) {
      this.RunWebsocketServer();
    }

    if (commander.ipcserver) {
      console.log("IPC server not yet implemented");
      return;
    }
  }

  public async Shutdown() {
    console.log("Shutting down");
    if (this._wsServer) {
      console.log("Stopping websocket server");
      await this._wsServer.Disconnect();
      await this._wsServer.StopServer();
      this._wsServer = null;
    }
    if (this._usePbOutput) {
      console.log("Stopping stdin output.");
      const exitMsg = IntifaceGuiProtocol.ServerProcessMessage.create({
        processEnded: IntifaceGuiProtocol.ServerProcessMessage.ProcessEnded.create(),
      });
      this.SendMessage(exitMsg);
      process.stdin.pause();
    }
    console.log("Exiting now.");
    // Give things a second to try and shutdown, then just go down uncleanly.
    setTimeout(() => {
      console.log("Server process did not shutdown cleanly, killing internally.");
      process.exit();
    }, 500);
  }

  private async OnGuiMessage(aMsg: Buffer) {
    const msg = IntifaceGuiProtocol.ServerControlMessage.decodeDelimited(aMsg);
    if (msg.stop !== null) {
      await this.Shutdown();
    }
  }

  private SendMessage(aMsg: IntifaceGuiProtocol.ServerProcessMessage) {
    if (!this._usePbOutput) {
      return;
    }
    const buffer = Buffer.from(IntifaceGuiProtocol.ServerProcessMessage.encodeDelimited(aMsg).finish());
    process.stdout.write(buffer);
  }

  private SendGuiLogMessage(aMsg: string) {
    const logmsg = IntifaceGuiProtocol.ServerProcessMessage.create({
      processLog: IntifaceGuiProtocol.ServerProcessMessage.ProcessLog.create({ message: aMsg }),
    });
    this.SendMessage(logmsg);
  }

  private SetupExit() {
    if (process.platform === "win32") {
      // const rl = require("readline").createInterface({
      //   input: process.stdin,
      //   output: process.stdout,
      // });

      // rl.on("SIGINT", () => {
      //   process.emit("SIGINT");
      // });
    }

    process.on("SIGINT", async () => {
      await this.Shutdown();
    });
  }

  private PrintVersion() {
    console.log(packageinfo.version);
  }

  private BuildOptions() {
    commander
      .version(packageinfo.version)
      .option("--servername <name>", "Name of server to pass to connecting clients", "Buttplug Server")
      .option("--serverversion", "Print version and exit")
    // tslint:disable-next-line max-line-length
      .option("--generatecert <path>", "Generates self signed certificate for secure websocket servers at the path specified, and exits.")
      .option("--deviceconfig <filename>", "Device configuration file (if none specified, will use internal version)")
      .option("--userdeviceconfig <filename>", "User device configuration file")
    // tslint:disable-next-line max-line-length
      .option("--wsallinterfaces", "If passed, listen on all interfaces. Otherwise only listen on 127.0.0.1.", false)
      .option("--wsinsecureport <number>",
              // tslint:disable-next-line max-line-length
              "Port to listen on for insecure websocket connections. Only listens on this port if this argument is passed.", 0)
      .option("--wssecureport <number>",
              // tslint:disable-next-line max-line-length
              "Port to listen on secure websocket connections (requires cert to be passed). Only listens on this port if this argument is passed.", 0)
      .option("--wscertfile <filename>", "Cert file to load for Secure Websockets.")
      .option("--wsprivfile <filename>", "Private key file to load for Secure Websockets.")
      .option("--ipcserver", "Run IPC server", false)
      .option("--ipcpipe <path>", "IPC Pipe Name for IPC Server IO")
    // tslint:disable-next-line max-line-length
      .option("--frontendpipe", "If passed, use protobuf protocol over stdin/out for communication with parent process.", false)
      .option("--pingtime <ping>", "Ping timeout maximum for server (in milliseconds, 0 = off/infinite ping)", 0)
      .option("--stayopen", "If passed, server will stay running after client disconnection", false)
      .option("--log <loglevel>", "Prints logs to console at specified log level.", "Off")
      .parse(process.argv);
  }

  private GenerateCertificate(aPath: string) {
    console.log("Creating secure selfsigned keys...");
    if (fs.existsSync("cert.pem") || fs.existsSync("private.pem")) {
      console.log("Please remove cert.pem and private.pem files before generating new keys.");
      return;
    }
    const pems = selfsigned.generate(undefined, { days: 365 });
    fs.writeFileSync(path.join(aPath, "cert.pem"), pems.cert);
    fs.writeFileSync(path.join(aPath, "private.pem"), pems.private);
    console.log("cert.pem and private.pem generated");
    return;
  }

  private LogToConsole() {
    ButtplugLogger.Logger.MaximumConsoleLogLevel = ButtplugLogLevel[commander.log as string];
  }

  private RunIPCServer() {
    // TODO Actually implement IPC server
  }

  private RunWebsocketServer() {
    const host: string = commander.websocketallinterfaces ? "0.0.0.0" : "127.0.0.1";

    const wsServer = new ButtplugNodeWebsocketServer(commander.servername, commander.pingtime);
    if (commander.wssecureport && commander.wscertfile !== undefined && commander.wsprivfile !== undefined) {
      console.log("Starting secure websocket server");
      wsServer.StartSecureServer(commander.wscertfile,
                                 commander.wsprivfile,
                                 commander.wssecureport,
                                 host);
      console.log(`Secure server listening on port ${commander.wssecureport}`);
    } else if (commander.wsinsecureport) {
      console.log("Starting insecure websocket server");
      wsServer.StartInsecureServer(commander.wsinsecureport, host);
      console.log(`Insecure server listening on port ${commander.wsinsecureport}`);
    }
    this._wsServer = wsServer;
    this.InitServer();
  }

  private InitServer() {
    if (this._wsServer) {
      this._wsServer.AddDeviceManager(new ButtplugNodeBluetoothLEDeviceManager());
    }
  }
}
