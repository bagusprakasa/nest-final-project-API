import chai, { assert, expect } from "chai";
import ResfulBooker from "$root/page/resful-booker.api";
import * as data from "$root/data/book.data";
import { getParams } from "$helper/lib.api";
import jsonSchema from "chai-json-schema";
import * as schema from "$root/schema/list-book.schema";

chai.use(jsonSchema);

describe("Login", () => {
  it("Should failure login", async () => {
    const response = await ResfulBooker.login(data.INVALID_LOGIN);
    assert.equal(response.status, 200);
    assert.equal(response.data.reason, "Bad credentials");
  });
  it("Should successfull login", async () => {
    const response = await ResfulBooker.login(data.LOGIN);
    assert.equal(response.status, 200);
    global.token = response.data.token;
  });
});

describe("Store Booking", () => {
  it("Should failure store booking", async () => {
    const response = await ResfulBooker.store(data.INVALID_STORE);
    assert.equal(response.status, 500);
    assert.equal(response.data, "Internal Server Error");
  });
  it("Should successfull store booking", async () => {
    const response = await ResfulBooker.store(data.STORE);
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA_STORE_BOOKING);
    global.bookingid = response.data.bookingid;
  });
});

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
    const response = await ResfulBooker.show(global.bookingid);
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA_SHOW_BOOKING);
  });
});

describe("Update Booking", () => {
  it("Should failure update booking", async () => {
    const response = await ResfulBooker.update(
      global.bookingid,
      data.UPDATE_PARTIAL,
      global.token
    );
    assert.equal(response.status, 400);
    assert.equal(response.data, "Bad Request");
  });
  it("Should successfull update booking", async () => {
    const response = await ResfulBooker.update(
      global.bookingid,
      data.UPDATE,
      global.token
    );
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA_UPDATE_BOOKING);
  });
  it("Should successfull partial update booking", async () => {
    const response = await ResfulBooker.updatePartial(
      global.bookingid,
      data.UPDATE_PARTIAL,
      global.token
    );
    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(
      schema.VALID_SCHEMA_UPDATE_PARTIAL_BOOKING
    );
  });
});
