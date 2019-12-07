# Version 0.12.2-0 - 2019/12/06

## Features

- Update dependencies, including Buttplug 0.12.2, mostly device
  additions.

# Version 0.12.0-1 - 2019/08/02

## Bugfixes

- Fix device config file loading argument

# Version 0.12.0-0 - 2019/07/28

## Features

- Updated dependencies, including Buttplug 0.12.0, mostly having to do
  with device config file updates/support. Nothing super exciting.

# Version 0.11.6-0 - 2019/05/27

## Features

- Updated dependencies, including Buttplug 0.11.6, with lots of new
  support for Kiiroo, Libo, MagicMotion, Youcups toys.

# Version 0.11.4-0 - 2019/04/20

## Features

- Added loading of external configuration files
- Update dependencies, including bugfixes for websocket handling and
  bluetooth devices in 0.11.4 of the buttplug-js dependencies

## Bugfixes

- Process now just calls exit on itself if it doesn't quit during
  Shutdown.

# Version 0.11.3-2 - 2019/04/19

## Bugfixes

- Make process actually signify startup/ready to desktop app

# Version 0.11.3-1 - 2019/04/19

## Bugfixes

- Change executable output name to IntifaceCLI, as expected by
  intiface-desktop.

# Version 0.11.3-0 - 2019/04/19

## Features

- Changed name again from buttplug-server-gui to intiface-cli-node
- Moved to own repo, seperate from engine, so we can iterate faster
- Version is now [engine version]-[cli build number]

# Version 0.11.0 - 2019/03/09

## Features

- Changed name from buttplug-js-websocket-server to
  buttplug-server-gui
- Added buttplug-server-cli project, to provide a native command line
  server. Currently works with websockets, will be adding IPC in the
  next release.
- Add ability to use Device Configuration files, eliminating need to
  change code to add devices to protocols we already support.
- Added freeze targets for mac/linux/rpi.
- Runs on Raspberry Pi Zero, though requires special builds to do so.
- Up'd version to be in line with buttplug-js core library.

## Bugfixes

- Fixed lots of unhandled promises, turning them into exception
  throws. Also now have a linter rule to make sure this doesn't happen
  again.

## Other

- Moved CI to Azure Pipelines
- Moved project to being a monorepo for all buttplug-js core library,
  device subtype manager, connector, and server CLI projects
- Now uses buttplug-node-websockets instead of implementing its own
  connectors.

# Version 0.0.3 - 2018/09/29

- Update deps
- Move to using bluetoothle manager module

# Version 0.0.2 - 2017/11/11

- Add Win7 freezing support

# Version 0.0.1 - 2017/09/10

- Initial build with bluetooth driver and websocket server
