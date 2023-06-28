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
