export const VALID_SCHEMA_GET_BOOKING_ID = {
  type: "array",
  default: [],
  items: {
    type: "object",
    title: "A Schema",
    required: ["bookingid"],
    properties: {
      bookingid: {
        type: "integer",
      },
    },
    examples: [
      {
        bookingid: 792,
      },
    ],
  },
};

export const VALID_SCHEMA_SHOW_BOOKING = {
  type: "object",
  default: {},
  required: [
    "firstname",
    "lastname",
    "totalprice",
    "depositpaid",
    "bookingdates",
  ],
  properties: {
    firstname: {
      type: "string",
      default: "",
    },
    lastname: {
      type: "string",
      default: "",
    },
    totalprice: {
      type: "integer",
      default: 0,
    },
    depositpaid: {
      type: "boolean",
      default: false,
    },
    bookingdates: {
      type: "object",
      default: {},
      required: ["checkin", "checkout"],
      properties: {
        checkin: {
          type: "string",
          default: "",
        },
        checkout: {
          type: "string",
          default: "",
        },
      },
    },
  },
};

export const VALID_SCHEMA_STORE_BOOKING = {
  type: "object",
  default: {},
  required: ["bookingid", "booking"],
  properties: {
    bookingid: {
      type: "integer",
      default: 0,
    },
    booking: {
      type: "object",
      default: {},
      properties: {
        firstname: {
          type: "string",
          default: "",
        },
        lastname: {
          type: "string",
          default: "",
          totalprice: {
            type: "integer",
            default: 0,
          },
          depositpaid: {
            type: "boolean",
            default: false,
          },
          bookingdates: {
            type: "object",
            default: {},
            properties: {
              checkin: {
                type: "string",
                default: "",
              },
              checkout: {
                type: "string",
                default: "",
              },
            },
          },
          additionalneeds: {
            type: "string",
            default: "",
          },
        },
      },
    },
  },
};
