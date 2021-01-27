import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";
const TIME_OUT = 20000;

class Api {
  axiosInstance: AxiosInstance;

  constructor(baseURL: string = BASE_URL, token = "") {
    console.log("tuananhle token: " + token);

    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: TIME_OUT,
    });
  }
  async get<TData>(path: string, config?: AxiosRequestConfig): Promise<TData> {
    try {
      const res = await this.axiosInstance.get(path, config);
      return res.data;
    } catch (e) {
      console.info("GET_ERR", { path, e });
      throw new Error(e.response?.data?.message || "Error when fetching data");
    }
  }
  async post<TData>(
    path: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<TData> {
    try {
      const res = await this.axiosInstance.post<TData>(path, data, config);
      return res.data;
    } catch (e) {
      const errorRes = {
        message: e.response?.data?.message || "Error when saving data",
        data: e.response?.data?.errors || [],
      };
      throw new Error(JSON.stringify(errorRes));
    }
  }
  async put<TData>(
    path: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TData>> {
    try {
      const res = await this.axiosInstance.put<TData>(path, data, config);
      return res;
    } catch (e) {
      console.info("PUT_ERR", JSON.stringify({ path, data }), e);
      throw new Error(e.response?.data?.message || "Error when saving data");
    }
  }
  async delete<TData>(
    path: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TData>> {
    try {
      const res = await this.axiosInstance.delete<TData>(path, config);
      return res;
    } catch (e) {
      console.info("DEL_ERR", { path, e });
      throw new Error(e.response?.data?.message || "Error when removing data");
    }
  }
}

export default Api;
