import { AxiosResponse, AxiosRequestConfig } from "axios";

type RequestFunction = <T = any, R = AxiosResponse<T>>(
  config: AxiosRequestConfig
) => Promise<R>;

class API {
  constructor(request: RequestFunction) {
    this.request = request;
  }

  request: RequestFunction;
}

export default API;
