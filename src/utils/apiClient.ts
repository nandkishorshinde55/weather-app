import { API_CONFIG } from "../config/config";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  path: string;
  queryParams?: Record<string, string | number>;
  body?: Record<string, any>;
  headers?: Record<string, string>;
}

export const apiClient = async <T>({
  method = "GET",
  path,
  queryParams,
  body,
  headers = {},
}: RequestOptions): Promise<T> => {
  const { BASE_URL } = API_CONFIG;

  // Build query string from queryParams
  const searchParams = new URLSearchParams(
    queryParams ? Object.entries(queryParams).map(([k, v]) => [k, String(v)]) : []
  );

  const url = `${BASE_URL}${path}${searchParams.toString() ? `?${searchParams}` : ""}`;

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "API request failed");
  }

  return response.json();
};
