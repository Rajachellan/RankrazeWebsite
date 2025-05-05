import { QueryClient } from "@tanstack/react-query";

async function throwIfResNotOk(res) {
  if (!res.ok) {
    let errorMessage = `HTTP error status: ${res.status}`;
    try {
      const errorJson = await res.json();
      if (errorJson.message) {
        errorMessage = errorJson.message;
      }
    } catch (e) {
      // If we can't parse the JSON, just use the HTTP status
    }
    throw new Error(errorMessage);
  }
  return res;
}

export async function apiRequest(
  url,
  { method = "GET", body, headers = {}, ...rest } = {}
) {
  if (body && typeof body !== "string") {
    body = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, {
    method,
    body,
    headers,
    credentials: "include",
    ...rest,
  });

  await throwIfResNotOk(res);

  if (res.headers.get("Content-Type")?.includes("application/json")) {
    return res.json();
  }

  return res;
}

export const getQueryFn = (options) => {
  return async (context) => {
    try {
      return await apiRequest(context.queryKey[0]);
    } catch (error) {
      // Handle 401 Unauthorized errors
      if (
        error.message.includes("401") &&
        options?.on401 === "returnNull"
      ) {
        return null;
      }
      throw error;
    }
  };
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});