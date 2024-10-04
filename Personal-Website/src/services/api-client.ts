import axios, { AxiosRequestConfig } from "axios";

export const githubUserName = "";

const axiosInstance = axios.create({
  baseURL: `https://api.github.com`,
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getReposReadme = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get(`${this.endpoint}`, config)
      .then((response) => response.data);
  };
}

export default APIClient;
