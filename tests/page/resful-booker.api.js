import BaseAPI from "$root/page/base.api";
const ResfulBooker = {
  getBookingId: () => BaseAPI.get("/booking"),
  getBookingIdParam: (firstname, lastname) =>
    BaseAPI.get(`/booking?firstname=${firstname}&lastname=${lastname}`),
  show: (id) => BaseAPI.get("/booking/" + id),
};

export default ResfulBooker;
