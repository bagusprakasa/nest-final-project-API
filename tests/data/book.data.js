export const PARAM_DATA = {
  firstname: "User",
  lastname: "Testing",
};

export const STORE = {
  firstname: "User",
  lastname: "Testing",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2023-01-01",
    checkout: "2023-05-06",
  },
  additionalneeds: "TestTest123",
};

export const INVALID_STORE = {
  lastname: "Testing",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2023-01-01",
    checkout: "2023-05-06",
  },
  additionalneeds: "TestTest123",
};

export const UPDATE = {
  firstname: "User123",
  lastname: "Testing123",
  totalprice: 111123,
  depositpaid: true,
  bookingdates: {
    checkin: "2023-02-01",
    checkout: "2023-06-01",
  },
  additionalneeds: "TestTest12345",
};

export const UPDATE_PARTIAL = {
  firstname: "User456",
  lastname: "Testing456",
};

export const LOGIN = {
  username: "admin",
  password: "password123",
};

export const INVALID_LOGIN = {
  username: "qq",
  password: "qq",
};

export const ID = {
  id: 0,
};
