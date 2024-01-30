import axios from "axios";
import cookies from "js-cookies"

class HttpService {
  constructor() {
    const token = this.getTokenFromLocalStorage();
   
    const service = axios.create({
      baseURL: 'http://122.176.50.200:8081',
      withCredentials: true,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });


    service.interceptors.response.use(this.handleSuccess);
    this.service = service;
  }

  handleSuccess = (response) => {
//     const ch = response.headers['Set-Cookie'];
// console.log
    return response;
  };

  handleError = (error) => {
    switch (error.response.status) {
      case 401:
        // Token expired - Handle this case appropriately, possibly by refreshing the token
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
  };

  redirectTo(url) {
    window.location.href = url;
  }

  getTokenFromLocalStorage() {
    // Check if window is defined (ensuring this code runs in a browser environment)
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem("token");
    }
    return null; // or handle the case where window is not defined
  }

  
  
  get(...args) {
    return this.service.get(...args);
  }

  post(...args) {
    return this.service.post(...args,);
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
