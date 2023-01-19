import axios from "axios";

class ApiManager {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3005/api",
    });
    this.requests = new Map();
    this.api.interceptors.request.use(
      (config) => {
        const interceptorId = Symbol();
        config.timeout = 5000;
        this.requests.set(interceptorId, Date.now());
        setTimeout(() => {
          this.requests.delete(interceptorId);
        }, 5000);
        return config;
      },
      (error) => {
        return { error: true, response: error };
      }
    );
    this.api.interceptors.response.use(
      (response) => {
        return { error: false, response };
      },
      (error) => {
        return { error: true, response: error };
      }
    );
  }

  async get(url, headers) {
    let response;
    if (headers) {
      response = await this.api.get(url, { headers: headers });
    } else {
      response = await this.api.get(url);
    }
    return response;
  }

  async post(url, data, headers) {
    let response;
    if (headers) {
      response = await this.api.post(url, data, { headers });
    } else {
      response = await this.api.post(url, data);
    }
    return response;
  }

  async delete(url, headers) {
    let response;
    if (headers) {
      response = await this.api.delete(url, { headers });
    } else {
      response = await this.api.delete(url);
    }
    return response;
  }

  async upload(url, data, onUploadProgress, headers) {
    let response;
    if (headers) {
      response = await this.api.post(url, data, {
        headers,
        onUploadProgress,
      });
    } else {
      response = await this.api.post(url, data, {
        onUploadProgress,
      });
    }
    return response;
  }
}

export { ApiManager };
