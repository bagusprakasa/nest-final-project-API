export const PARAM_DATA = {
  firstname: "Jim",
  lastname: "Brown",
};

export const STORE = {
  firstname: "Jim",
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
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
  firstname: "James",
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
};

export const UPDATE_PARTIAL = {
  firstname: "James",
  lastname: "Brown",
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
