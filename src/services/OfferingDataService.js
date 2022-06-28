import http from "../http-common";

class OfferingDataService {
  getAll() {
    return http.get("/offerings");
  }

  get(id) {
    return http.get(`/offerings/offering/${id}`);
  }

  create(data) {
    return http.post("/offerings/offering", data);
  }

  update(id, data) {
    return http.put(`/offerings/offering/${id}`, data);
  }

  delete(id) {
    return http.delete(`/offerings/offering/${id}`);
  }

  deleteAll() {
    return http.delete(`/offerings`);
  }

  findByCity(city) {
    return http.get(`/offerings?city=${city}`);
  }

  getAllTags() {
    return http.get("/offerings/tags").data;
  }

  getAllTypes() {
    return http.get("/offerings/types").data;
  }

  getAllCities() {
    return http.get("/offerings/cities").data;
  }

}

export default new OfferingDataService();