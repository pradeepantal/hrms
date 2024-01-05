import axios from "axios";

class HttpService {

  constructor() {
    //const token = window.localStorage.getItem("token");
    const service = axios.create({
      baseURL:'http://122.176.50.200:8081'
      // headers: token
      //   ? {
      //       Authorization: `Bearer ${token}`,
      //     }
      //   : {},
    });

    service.interceptors.response.use(this.handleSuccess, this.handleError);

    this.service = service;

  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    switch (error.response.status) {
      case 401:
        // Token expired
        delete this.service.defaults.headers["Authorization"];
        window.localStorage.removeItem("token");
        this.redirectTo("/login");
        break;
      case 404:
        // Not found
        this.redirectTo("/404");
        break;
      default:
        // Internal server error
        this.redirectTo("/500");
        break;
    }
    return Promise.reject(error);
  }

  redirectTo(url) {
    window.location.href = url;
  }

  get(...args) {
    return this.service.get(...args);
  }

  post(...args) {
    return this.service.post(...args);
  }

  put(...args) {
    return this.service.put(...args);
  }
  patch(...args) {
    return this.service.patch(...args);
  }

  delete(...args) {
    return this.service.delete(...args);
  }
}

export default new HttpService();