import axios, {AxiosInstance} from 'axios';

import {anyJson, HttpClient, RequestConfig} from './HttpClient';

export interface Headers {
  [header: string]: string;
}

export class HttpApi implements HttpClient {
  private baseURL: string;
  private headers: Headers;
  private axiosInstance: AxiosInstance;

  public constructor(baseURL: string = '', headers: Headers = {}) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.axiosInstance = axios.create({baseURL, headers});
  }

  public setBaseURL(baseURL: string) {
    this.baseURL = baseURL;
    this.createAxiosInstance();
  }

  public addHeader(header: string, value: string) {
    this.headers[header] = value;
    this.createAxiosInstance();
  }

  public removeHeader(header: string) {
    this.headers[header] = '';
    this.createAxiosInstance();
  }

  public cleanHeaders() {
    this.headers = {};
    this.createAxiosInstance();
  }

  public async get<T>(url: string, config?: RequestConfig) {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: anyJson) {
    const response = await this.axiosInstance.post<T>(url, data);
    return response.data;
  }

  public async put<T>(url: string, data?: anyJson) {
    const response = await this.axiosInstance.put<T>(url, data);
    return response.data;
  }

  public async delete<T>(url: string, config?: RequestConfig) {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }

  private createAxiosInstance() {
    this.axiosInstance = axios.create({baseURL: this.baseURL, headers: this.headers});
  }
}
