interface JSONObject {
  [x: string]: anyJson;
}

interface JSONArray extends Array<anyJson> {}

export type anyJson = string | number | boolean | null | undefined | JSONObject | JSONArray;

export interface RequestConfig {
  params?: anyJson;
}

export interface HttpClient {
  get<T>(url: string, config?: RequestConfig): Promise<T>;
  post<T>(url: string, data?: anyJson): Promise<T>;
  put<T>(url: string, data?: anyJson): Promise<T>;
  delete<T>(url: string, config?: RequestConfig): Promise<T>;
}
