import * as $protobuf from "protobufjs";
/** Namespace IntifaceGuiProtocol. */
export namespace IntifaceGuiProtocol {

    /** Properties of a ServerControlMessage. */
    interface IServerControlMessage {

        /** ServerControlMessage stop */
        stop?: (IntifaceGuiProtocol.ServerControlMessage.IStop|null);
    }

    /** Represents a ServerControlMessage. */
    class ServerControlMessage implements IServerControlMessage {

        /**
         * Constructs a new ServerControlMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: IntifaceGuiProtocol.IServerControlMessage);

        /** ServerControlMessage stop. */
        public stop?: (IntifaceGuiProtocol.ServerControlMessage.IStop|null);

        /** ServerControlMessage msg. */
        public msg?: "stop";

        /**
         * Creates a new ServerControlMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerControlMessage instance
         */
        public static create(properties?: IntifaceGuiProtocol.IServerControlMessage): IntifaceGuiProtocol.ServerControlMessage;

        /**
         * Encodes the specified ServerControlMessage message. Does not implicitly {@link IntifaceGuiProtocol.ServerControlMessage.verify|verify} messages.
         * @param message ServerControlMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IntifaceGuiProtocol.IServerControlMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerControlMessage message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerControlMessage.verify|verify} messages.
         * @param message ServerControlMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IntifaceGuiProtocol.IServerControlMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerControlMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerControlMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerControlMessage;

        /**
         * Decodes a ServerControlMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerControlMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerControlMessage;

        /**
         * Verifies a ServerControlMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerControlMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerControlMessage
         */
        public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerControlMessage;

        /**
         * Creates a plain object from a ServerControlMessage message. Also converts values to other types if specified.
         * @param message ServerControlMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: IntifaceGuiProtocol.ServerControlMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerControlMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerControlMessage {

        /** Properties of a Stop. */
        interface IStop {
        }

        /** Represents a Stop. */
        class Stop implements IStop {

            /**
             * Constructs a new Stop.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerControlMessage.IStop);

            /**
             * Creates a new Stop instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Stop instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerControlMessage.IStop): IntifaceGuiProtocol.ServerControlMessage.Stop;

            /**
             * Encodes the specified Stop message. Does not implicitly {@link IntifaceGuiProtocol.ServerControlMessage.Stop.verify|verify} messages.
             * @param message Stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerControlMessage.IStop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Stop message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerControlMessage.Stop.verify|verify} messages.
             * @param message Stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerControlMessage.IStop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Stop message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerControlMessage.Stop;

            /**
             * Decodes a Stop message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerControlMessage.Stop;

            /**
             * Verifies a Stop message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Stop message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Stop
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerControlMessage.Stop;

            /**
             * Creates a plain object from a Stop message. Also converts values to other types if specified.
             * @param message Stop
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerControlMessage.Stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Stop to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ServerProcessMessage. */
    interface IServerProcessMessage {

        /** ServerProcessMessage processStarted */
        processStarted?: (IntifaceGuiProtocol.ServerProcessMessage.IProcessStarted|null);

        /** ServerProcessMessage processError */
        processError?: (IntifaceGuiProtocol.ServerProcessMessage.IProcessError|null);

        /** ServerProcessMessage processEnded */
        processEnded?: (IntifaceGuiProtocol.ServerProcessMessage.IProcessEnded|null);

        /** ServerProcessMessage processLog */
        processLog?: (IntifaceGuiProtocol.ServerProcessMessage.IProcessLog|null);

        /** ServerProcessMessage buttplugLog */
        buttplugLog?: (IntifaceGuiProtocol.ServerProcessMessage.IButtplugLog|null);

        /** ServerProcessMessage clientConnected */
        clientConnected?: (IntifaceGuiProtocol.ServerProcessMessage.IClientConnected|null);

        /** ServerProcessMessage clientDisconnected */
        clientDisconnected?: (IntifaceGuiProtocol.ServerProcessMessage.IClientDisconnected|null);

        /** ServerProcessMessage deviceConnected */
        deviceConnected?: (IntifaceGuiProtocol.ServerProcessMessage.IDeviceConnected|null);

        /** ServerProcessMessage deviceDisconnected */
        deviceDisconnected?: (IntifaceGuiProtocol.ServerProcessMessage.IDeviceDisconnected|null);
    }

    /** Represents a ServerProcessMessage. */
    class ServerProcessMessage implements IServerProcessMessage {

        /**
         * Constructs a new ServerProcessMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: IntifaceGuiProtocol.IServerProcessMessage);

        /** ServerProcessMessage processStarted. */
        public processStarted?: (IntifaceGuiProtocol.ServerProcessMessage.IProcessStarted|null);

        /** ServerProcessMessage processError. */
        public processError?: (IntifaceGuiProtocol.ServerProcessMessage.IProcessError|null);

        /** ServerProcessMessage processEnded. */
        public processEnded?: (IntifaceGuiProtocol.ServerProcessMessage.IProcessEnded|null);

        /** ServerProcessMessage processLog. */
        public processLog?: (IntifaceGuiProtocol.ServerProcessMessage.IProcessLog|null);

        /** ServerProcessMessage buttplugLog. */
        public buttplugLog?: (IntifaceGuiProtocol.ServerProcessMessage.IButtplugLog|null);

        /** ServerProcessMessage clientConnected. */
        public clientConnected?: (IntifaceGuiProtocol.ServerProcessMessage.IClientConnected|null);

        /** ServerProcessMessage clientDisconnected. */
        public clientDisconnected?: (IntifaceGuiProtocol.ServerProcessMessage.IClientDisconnected|null);

        /** ServerProcessMessage deviceConnected. */
        public deviceConnected?: (IntifaceGuiProtocol.ServerProcessMessage.IDeviceConnected|null);

        /** ServerProcessMessage deviceDisconnected. */
        public deviceDisconnected?: (IntifaceGuiProtocol.ServerProcessMessage.IDeviceDisconnected|null);

        /** ServerProcessMessage msg. */
        public msg?: ("processStarted"|"processError"|"processEnded"|"processLog"|"buttplugLog"|"clientConnected"|"clientDisconnected"|"deviceConnected"|"deviceDisconnected");

        /**
         * Creates a new ServerProcessMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerProcessMessage instance
         */
        public static create(properties?: IntifaceGuiProtocol.IServerProcessMessage): IntifaceGuiProtocol.ServerProcessMessage;

        /**
         * Encodes the specified ServerProcessMessage message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.verify|verify} messages.
         * @param message ServerProcessMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IntifaceGuiProtocol.IServerProcessMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerProcessMessage message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.verify|verify} messages.
         * @param message ServerProcessMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IntifaceGuiProtocol.IServerProcessMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerProcessMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerProcessMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage;

        /**
         * Decodes a ServerProcessMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerProcessMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage;

        /**
         * Verifies a ServerProcessMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerProcessMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerProcessMessage
         */
        public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage;

        /**
         * Creates a plain object from a ServerProcessMessage message. Also converts values to other types if specified.
         * @param message ServerProcessMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerProcessMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerProcessMessage {

        /** Properties of a ProcessLog. */
        interface IProcessLog {

            /** ProcessLog message */
            message?: (string|null);
        }

        /** Represents a ProcessLog. */
        class ProcessLog implements IProcessLog {

            /**
             * Constructs a new ProcessLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerProcessMessage.IProcessLog);

            /** ProcessLog message. */
            public message: string;

            /**
             * Creates a new ProcessLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessLog instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerProcessMessage.IProcessLog): IntifaceGuiProtocol.ServerProcessMessage.ProcessLog;

            /**
             * Encodes the specified ProcessLog message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ProcessLog.verify|verify} messages.
             * @param message ProcessLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerProcessMessage.IProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessLog message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ProcessLog.verify|verify} messages.
             * @param message ProcessLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerProcessMessage.IProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage.ProcessLog;

            /**
             * Decodes a ProcessLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage.ProcessLog;

            /**
             * Verifies a ProcessLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessLog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessLog
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage.ProcessLog;

            /**
             * Creates a plain object from a ProcessLog message. Also converts values to other types if specified.
             * @param message ProcessLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage.ProcessLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessLog to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessStarted. */
        interface IProcessStarted {
        }

        /** Represents a ProcessStarted. */
        class ProcessStarted implements IProcessStarted {

            /**
             * Constructs a new ProcessStarted.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerProcessMessage.IProcessStarted);

            /**
             * Creates a new ProcessStarted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessStarted instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerProcessMessage.IProcessStarted): IntifaceGuiProtocol.ServerProcessMessage.ProcessStarted;

            /**
             * Encodes the specified ProcessStarted message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ProcessStarted.verify|verify} messages.
             * @param message ProcessStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerProcessMessage.IProcessStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessStarted message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ProcessStarted.verify|verify} messages.
             * @param message ProcessStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerProcessMessage.IProcessStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage.ProcessStarted;

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage.ProcessStarted;

            /**
             * Verifies a ProcessStarted message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessStarted message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessStarted
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage.ProcessStarted;

            /**
             * Creates a plain object from a ProcessStarted message. Also converts values to other types if specified.
             * @param message ProcessStarted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage.ProcessStarted, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessStarted to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessError. */
        interface IProcessError {

            /** ProcessError message */
            message?: (string|null);
        }

        /** Represents a ProcessError. */
        class ProcessError implements IProcessError {

            /**
             * Constructs a new ProcessError.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerProcessMessage.IProcessError);

            /** ProcessError message. */
            public message: string;

            /**
             * Creates a new ProcessError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessError instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerProcessMessage.IProcessError): IntifaceGuiProtocol.ServerProcessMessage.ProcessError;

            /**
             * Encodes the specified ProcessError message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ProcessError.verify|verify} messages.
             * @param message ProcessError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerProcessMessage.IProcessError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessError message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ProcessError.verify|verify} messages.
             * @param message ProcessError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerProcessMessage.IProcessError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage.ProcessError;

            /**
             * Decodes a ProcessError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage.ProcessError;

            /**
             * Verifies a ProcessError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessError
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage.ProcessError;

            /**
             * Creates a plain object from a ProcessError message. Also converts values to other types if specified.
             * @param message ProcessError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage.ProcessError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessEnded. */
        interface IProcessEnded {
        }

        /** Represents a ProcessEnded. */
        class ProcessEnded implements IProcessEnded {

            /**
             * Constructs a new ProcessEnded.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerProcessMessage.IProcessEnded);

            /**
             * Creates a new ProcessEnded instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessEnded instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerProcessMessage.IProcessEnded): IntifaceGuiProtocol.ServerProcessMessage.ProcessEnded;

            /**
             * Encodes the specified ProcessEnded message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ProcessEnded.verify|verify} messages.
             * @param message ProcessEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerProcessMessage.IProcessEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessEnded message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ProcessEnded.verify|verify} messages.
             * @param message ProcessEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerProcessMessage.IProcessEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage.ProcessEnded;

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage.ProcessEnded;

            /**
             * Verifies a ProcessEnded message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessEnded message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessEnded
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage.ProcessEnded;

            /**
             * Creates a plain object from a ProcessEnded message. Also converts values to other types if specified.
             * @param message ProcessEnded
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage.ProcessEnded, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessEnded to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ButtplugLog. */
        interface IButtplugLog {

            /** ButtplugLog message */
            message?: (string|null);
        }

        /** Represents a ButtplugLog. */
        class ButtplugLog implements IButtplugLog {

            /**
             * Constructs a new ButtplugLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerProcessMessage.IButtplugLog);

            /** ButtplugLog message. */
            public message: string;

            /**
             * Creates a new ButtplugLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ButtplugLog instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerProcessMessage.IButtplugLog): IntifaceGuiProtocol.ServerProcessMessage.ButtplugLog;

            /**
             * Encodes the specified ButtplugLog message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ButtplugLog.verify|verify} messages.
             * @param message ButtplugLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerProcessMessage.IButtplugLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ButtplugLog message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ButtplugLog.verify|verify} messages.
             * @param message ButtplugLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerProcessMessage.IButtplugLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage.ButtplugLog;

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage.ButtplugLog;

            /**
             * Verifies a ButtplugLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ButtplugLog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ButtplugLog
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage.ButtplugLog;

            /**
             * Creates a plain object from a ButtplugLog message. Also converts values to other types if specified.
             * @param message ButtplugLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage.ButtplugLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ButtplugLog to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClientConnected. */
        interface IClientConnected {

            /** ClientConnected clientName */
            clientName?: (string|null);
        }

        /** Represents a ClientConnected. */
        class ClientConnected implements IClientConnected {

            /**
             * Constructs a new ClientConnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerProcessMessage.IClientConnected);

            /** ClientConnected clientName. */
            public clientName: string;

            /**
             * Creates a new ClientConnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientConnected instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerProcessMessage.IClientConnected): IntifaceGuiProtocol.ServerProcessMessage.ClientConnected;

            /**
             * Encodes the specified ClientConnected message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ClientConnected.verify|verify} messages.
             * @param message ClientConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerProcessMessage.IClientConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientConnected message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ClientConnected.verify|verify} messages.
             * @param message ClientConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerProcessMessage.IClientConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientConnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage.ClientConnected;

            /**
             * Decodes a ClientConnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage.ClientConnected;

            /**
             * Verifies a ClientConnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientConnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientConnected
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage.ClientConnected;

            /**
             * Creates a plain object from a ClientConnected message. Also converts values to other types if specified.
             * @param message ClientConnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage.ClientConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientConnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClientDisconnected. */
        interface IClientDisconnected {
        }

        /** Represents a ClientDisconnected. */
        class ClientDisconnected implements IClientDisconnected {

            /**
             * Constructs a new ClientDisconnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerProcessMessage.IClientDisconnected);

            /**
             * Creates a new ClientDisconnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientDisconnected instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerProcessMessage.IClientDisconnected): IntifaceGuiProtocol.ServerProcessMessage.ClientDisconnected;

            /**
             * Encodes the specified ClientDisconnected message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ClientDisconnected.verify|verify} messages.
             * @param message ClientDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerProcessMessage.IClientDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientDisconnected message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.ClientDisconnected.verify|verify} messages.
             * @param message ClientDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerProcessMessage.IClientDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage.ClientDisconnected;

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage.ClientDisconnected;

            /**
             * Verifies a ClientDisconnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientDisconnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientDisconnected
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage.ClientDisconnected;

            /**
             * Creates a plain object from a ClientDisconnected message. Also converts values to other types if specified.
             * @param message ClientDisconnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage.ClientDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientDisconnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeviceConnected. */
        interface IDeviceConnected {

            /** DeviceConnected deviceName */
            deviceName?: (string|null);

            /** DeviceConnected deviceId */
            deviceId?: (number|null);
        }

        /** Represents a DeviceConnected. */
        class DeviceConnected implements IDeviceConnected {

            /**
             * Constructs a new DeviceConnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerProcessMessage.IDeviceConnected);

            /** DeviceConnected deviceName. */
            public deviceName: string;

            /** DeviceConnected deviceId. */
            public deviceId: number;

            /**
             * Creates a new DeviceConnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceConnected instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerProcessMessage.IDeviceConnected): IntifaceGuiProtocol.ServerProcessMessage.DeviceConnected;

            /**
             * Encodes the specified DeviceConnected message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.DeviceConnected.verify|verify} messages.
             * @param message DeviceConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerProcessMessage.IDeviceConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceConnected message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.DeviceConnected.verify|verify} messages.
             * @param message DeviceConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerProcessMessage.IDeviceConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage.DeviceConnected;

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage.DeviceConnected;

            /**
             * Verifies a DeviceConnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeviceConnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceConnected
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage.DeviceConnected;

            /**
             * Creates a plain object from a DeviceConnected message. Also converts values to other types if specified.
             * @param message DeviceConnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage.DeviceConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceConnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeviceDisconnected. */
        interface IDeviceDisconnected {

            /** DeviceDisconnected deviceId */
            deviceId?: (number|null);
        }

        /** Represents a DeviceDisconnected. */
        class DeviceDisconnected implements IDeviceDisconnected {

            /**
             * Constructs a new DeviceDisconnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: IntifaceGuiProtocol.ServerProcessMessage.IDeviceDisconnected);

            /** DeviceDisconnected deviceId. */
            public deviceId: number;

            /**
             * Creates a new DeviceDisconnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceDisconnected instance
             */
            public static create(properties?: IntifaceGuiProtocol.ServerProcessMessage.IDeviceDisconnected): IntifaceGuiProtocol.ServerProcessMessage.DeviceDisconnected;

            /**
             * Encodes the specified DeviceDisconnected message. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.DeviceDisconnected.verify|verify} messages.
             * @param message DeviceDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: IntifaceGuiProtocol.ServerProcessMessage.IDeviceDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceDisconnected message, length delimited. Does not implicitly {@link IntifaceGuiProtocol.ServerProcessMessage.DeviceDisconnected.verify|verify} messages.
             * @param message DeviceDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: IntifaceGuiProtocol.ServerProcessMessage.IDeviceDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntifaceGuiProtocol.ServerProcessMessage.DeviceDisconnected;

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntifaceGuiProtocol.ServerProcessMessage.DeviceDisconnected;

            /**
             * Verifies a DeviceDisconnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeviceDisconnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceDisconnected
             */
            public static fromObject(object: { [k: string]: any }): IntifaceGuiProtocol.ServerProcessMessage.DeviceDisconnected;

            /**
             * Creates a plain object from a DeviceDisconnected message. Also converts values to other types if specified.
             * @param message DeviceDisconnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: IntifaceGuiProtocol.ServerProcessMessage.DeviceDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceDisconnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
