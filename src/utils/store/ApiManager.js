import axios from 'axios';

class ApiManager {
    constructor() {
        this.api = axios.create();
        this.requests = new Map();
        this.api.interceptors.response.use(
            (response) => {
                const interceptorId = Symbol();
                this.requests.set(interceptorId, Date.now());
                setTimeout(() => {
                    this.api.interceptors.response.eject(interceptorId);
                }, 3000); //3000 is timeout in milliseconds
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    async get(url) {
        const response = await this.api.get(url);
        return response.data;
    }

    async post(url, data) {
        const response = await this.api.post(url, data);
        return response.data;
    }

    async delete(url) {
        await this.api.delete(url);
    }

    async upload(url, data, onUploadProgress) {
        const response = await this.api.post(url, data, {
            onUploadProgress
        });
        return response.data;
    }
}

export default new ApiManager();
