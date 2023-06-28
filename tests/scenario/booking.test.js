import chai, { assert, expect } from "chai";
import ResfulBooker from "$root/page/resful-booker.api";
import * as data from "$root/data/book.data";
import { getParams } from "$helper/lib.api";
import jsonSchema from "chai-json-schema";
import * as schema from "$root/schema/list-book.schema";

chai.use(jsonSchema);

describe("Get Booking Id", () => {
  it("Should successfull get booking id", async () => {
    const response = await ResfulBooker.getBookingId();
    assert.equal(response.status, 200);
  });
  it("Should successfull get booking id with param", async () => {
    // var firstname = getParams(data.PARAM_DATA["firstname"]);
    // const lastname = getParams(data.PARAM_DATA["lastname"]);
    const response = await ResfulBooker.getBookingIdParam(
      data.PARAM_DATA["firstname"],
      data.PARAM_DATA["lastname"]
    );
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA_GET_BOOKING_ID);
  });
});

describe("Show Booking Id", () => {
  it("Should successfull show booking id", async () => {
    const response = await ResfulBooker.show(data.SHOW_ID["id"]);
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA_SHOW_BOOKING);
  });
});

describe("Store Booking", () => {
  it("Should successfull store booking", async () => {
    const response = await ResfulBooker.store(data.STORE);
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA_STORE_BOOKING);
  });
});
