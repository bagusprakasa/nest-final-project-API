import BaseAPI from "$root/page/base.api";
const ResfulBooker = {
  getBookingId: () => BaseAPI.get("/booking"),
  getBookingIdParam: (firstname, lastname) =>
    BaseAPI.get(`/booking?firstname=${firstname}&lastname=${lastname}`),
  show: (id) => BaseAPI.get("/booking/" + id),
  store: (data) => BaseAPI.post("/booking", data),
  update: (id, data) => BaseAPI.put("/booking/" + id, data),
  updatePartial: (id, data) => BaseAPI.patch("/booking/" + id, data),
};

export default ResfulBooker;
