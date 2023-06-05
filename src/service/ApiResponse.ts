/**
 * @author topu
 * @date 2023/6/5
 * @Description 对Promise进行二次封装
 * @param {type} [param] 参数说明
 * @return 返回值
 */
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

class ApiResponse {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, timeout: number) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
    });
    /**
     * @author topu
     * @date 2023/6/5
     * @Description 定义请求拦截器
     * @param {type} [param] 参数说明
     * @return 返回值
     */

    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );

    /**
     * @author topu
     * @date 2023/6/5
     * @Description 定义响应拦截器
     * @param {type} [param] 参数说明
     * @return 返回值
     */

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }

  public get<T>(url: string, data?: object | string | number): Promise<T> {
    return this.axiosInstance.get(url, { data });
  }

  public post<T>(url: string, data?: object): Promise<T> {
    return this.axiosInstance.post(url, { data });
  }
}

export default ApiResponse;
