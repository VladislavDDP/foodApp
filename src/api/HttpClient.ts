export type anyJson = {[key: string]: number | string | anyJson | undefined | null};

export interface RequestConfig {
  params?: anyJson;
}

export interface HttpClient {
  get<T>(url: string, config?: RequestConfig): Promise<T>;
  post<T>(url: string, data?: anyJson): Promise<T>;
  put<T>(url: string, data?: anyJson): Promise<T>;
  delete<T>(url: string, config?: RequestConfig): Promise<T>;
}
