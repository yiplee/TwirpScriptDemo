// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/haberdasher.proto
/* eslint-disable */

import {
  BinaryReader,
  BinaryWriter,
  JSONrequest,
  PBrequest,
} from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `yarn twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";

//========================================//
//      Haberdasher Protobuf Client       //
//========================================//

/**
 * MakeHat produces a hat of mysterious, randomly-selected color!
 */
export async function MakeHat(makeHat, config) {
  const response = await PBrequest(
    "/Haberdasher/MakeHat",
    Req.MakeHat.encode(makeHat),
    config
  );
  return Hat.decode(response);
}

//========================================//
//        Haberdasher JSON Client         //
//========================================//

/**
 * MakeHat produces a hat of mysterious, randomly-selected color!
 */
export async function MakeHatJSON(makeHat, config) {
  const response = await JSONrequest(
    "/Haberdasher/MakeHat",
    Req.MakeHatJSON.encode(makeHat),
    config
  );
  return HatJSON.decode(response);
}

export function createHaberdasher(service) {
  return {
    name: "Haberdasher",
    methods: {
      MakeHat: {
        name: "MakeHat",
        handler: service.MakeHat,
        input: { protobuf: Req.MakeHat, json: Req.MakeHatJSON },
        output: { protobuf: Hat, json: HatJSON },
      },
    },
  };
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Req = {
  /**
   * Serializes Req to protobuf.
   */
  encode: function (_msg) {
    return new Uint8Array();
  },

  /**
   * Deserializes Req from protobuf.
   */
  decode: function (_bytes) {
    return {};
  },

  /**
   * Initializes Req with all fields set to their default value.
   */
  initialize: function () {
    return {};
  },

  /**
   * @private
   */
  _writeMessage: function (_msg, writer) {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (_msg, _reader) {
    return _msg;
  },

  MakeHat: {
    /**
     * Serializes Req.MakeHat to protobuf.
     */
    encode: function (msg) {
      return Req.MakeHat._writeMessage(
        msg,
        new BinaryWriter()
      ).getResultBuffer();
    },

    /**
     * Deserializes Req.MakeHat from protobuf.
     */
    decode: function (bytes) {
      return Req.MakeHat._readMessage(
        Req.MakeHat.initialize(),
        new BinaryReader(bytes)
      );
    },

    /**
     * Initializes Req.MakeHat with all fields set to their default value.
     */
    initialize: function () {
      return {
        inches: 0,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (msg, writer) {
      if (msg.inches) {
        writer.writeInt32(1, msg.inches);
      }
      return writer;
    },

    /**
     * @private
     */
    _readMessage: function (msg, reader) {
      while (reader.nextField()) {
        const field = reader.getFieldNumber();
        switch (field) {
          case 1: {
            msg.inches = reader.readInt32();
            break;
          }
          default: {
            reader.skipField();
            break;
          }
        }
      }
      return msg;
    },
  },
};

export const Hat = {
  /**
   * Serializes Hat to protobuf.
   */
  encode: function (msg) {
    return Hat._writeMessage(msg, new BinaryWriter()).getResultBuffer();
  },

  /**
   * Deserializes Hat from protobuf.
   */
  decode: function (bytes) {
    return Hat._readMessage(Hat.initialize(), new BinaryReader(bytes));
  },

  /**
   * Initializes Hat with all fields set to their default value.
   */
  initialize: function () {
    return {
      inches: 0,
      color: "",
      name: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg, writer) {
    if (msg.inches) {
      writer.writeInt32(1, msg.inches);
    }
    if (msg.color) {
      writer.writeString(2, msg.color);
    }
    if (msg.name) {
      writer.writeString(3, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg, reader) {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.inches = reader.readInt32();
          break;
        }
        case 2: {
          msg.color = reader.readString();
          break;
        }
        case 3: {
          msg.name = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const ReqJSON = {
  /**
   * Serializes Req to JSON.
   */
  encode: function (_msg) {
    return "{}";
  },

  /**
   * Deserializes Req from JSON.
   */
  decode: function (_json) {
    return {};
  },

  /**
   * Initializes Req with all fields set to their default value.
   */
  initialize: function () {
    return {};
  },

  /**
   * @private
   */
  _writeMessage: function (_msg) {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (msg, _json) {
    return msg;
  },

  MakeHat: {
    /**
     * Serializes Req.MakeHat to JSON.
     */
    encode: function (msg) {
      return JSON.stringify(ReqJSON.MakeHat._writeMessage(msg));
    },

    /**
     * Deserializes Req.MakeHat from JSON.
     */
    decode: function (json) {
      return ReqJSON.MakeHat._readMessage(
        ReqJSON.MakeHat.initialize(),
        JSON.parse(json)
      );
    },

    /**
     * Initializes Req.MakeHat with all fields set to their default value.
     */
    initialize: function () {
      return {
        inches: 0,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (msg) {
      const json = {};
      if (msg.inches) {
        json.inches = msg.inches;
      }
      return json;
    },

    /**
     * @private
     */
    _readMessage: function (msg, json) {
      const _inches = json.inches;
      if (_inches) {
        msg.inches = _inches;
      }
      return msg;
    },
  },
};

export const HatJSON = {
  /**
   * Serializes Hat to JSON.
   */
  encode: function (msg) {
    return JSON.stringify(HatJSON._writeMessage(msg));
  },

  /**
   * Deserializes Hat from JSON.
   */
  decode: function (json) {
    return HatJSON._readMessage(HatJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Hat with all fields set to their default value.
   */
  initialize: function () {
    return {
      inches: 0,
      color: "",
      name: "",
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg) {
    const json = {};
    if (msg.inches) {
      json.inches = msg.inches;
    }
    if (msg.color) {
      json.color = msg.color;
    }
    if (msg.name) {
      json.name = msg.name;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg, json) {
    const _inches = json.inches;
    if (_inches) {
      msg.inches = _inches;
    }
    const _color = json.color;
    if (_color) {
      msg.color = _color;
    }
    const _name = json.name;
    if (_name) {
      msg.name = _name;
    }
    return msg;
  },
};
