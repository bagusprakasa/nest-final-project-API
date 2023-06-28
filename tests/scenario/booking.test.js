import chai, { assert, expect } from "chai";
import ResfulBooker from "$root/page/resful-booker.api";
import * as data from "$root/data/book.data";
import { getParams } from "$helper/lib.api";
import jsonSchema from "chai-json-schema";
import * as schema from "$root/schema/list-book.schema";

chai.use(jsonSchema);

describe("Get Booking Id", () => {
  it("Should successfull get booking id", async () => {
    await ResfulBooker.getBookingId()
      .then((response) => {
        assert.equal(response.status, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it("Should successfull get booking id with param", async () => {
    // var firstname = getParams(data.PARAM_DATA["firstname"]);
    // const lastname = getParams(data.PARAM_DATA["lastname"]);
    await ResfulBooker.getBookingIdParam(
      data.PARAM_DATA["firstname"],
      data.PARAM_DATA["lastname"]
    )
      .then((response) => {
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(
          schema.VALID_SCHEMA_GET_BOOKING_ID
        );
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
