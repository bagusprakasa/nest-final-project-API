import * as api from "$root/page/base.api";
const ResfulBooker = {
  login: (data) => api.BaseAPI.post("/auth", data),
  getBookingId: () => api.BaseAPI.get("/booking"),
  getBookingIdParam: (firstname, lastname) =>
    api.BaseAPI.get(`/booking?firstname=${firstname}&lastname=${lastname}`),
  show: (id) => api.BaseAPI.get("/booking/" + id),
  store: (data) => api.BaseAPI.post("/booking", data),
  update: (id, data, token) =>
    api.BaseAPIToken(token).put("/booking/" + id, data),
  updatePartial: (id, data, token) =>
    api.BaseAPIToken(token).patch("/booking/" + id, data),
  delete: (id, token) => api.BaseAPIToken(token).delete("/booking/" + id),
};

export default ResfulBooker;
