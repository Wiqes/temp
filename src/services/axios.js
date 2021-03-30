import axios from 'axios';

class Axios {
  constructor({ baseURL }) {
    this.instance = axios.create({ baseURL });
  }

  makeRequest(method, url, options = {}) {
    const headers = { ...this.instance.defaults.headers, ...options.headers };

    return this.instance({
      ...options,
      method,
      url,
      headers,
    });
  }

  get(url) {
    return this.makeRequest('get', url);
  }

  post(url, data) {
    return this.makeRequest('post', url, data);
  }

  put(url, data) {
    return this.makeRequest('put', url, data);
  }

  delete(url, data) {
    return this.makeRequest('delete', url, data);
  }
}

// TODO: use url from config (env-dependent)
export default new Axios({ baseURL: 'http://localhost:8000/api/v1' });
