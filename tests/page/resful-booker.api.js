import BaseAPI from "$root/page/base.api";
const ResfulBooker = {
  getBookingId: () => BaseAPI.get("/booking"),
  getBookingIdParam: (firstname, lastname) =>
    BaseAPI.get(`/booking?firstname=${firstname}&lastname=${lastname}`),
};

export default ResfulBooker;
