import { ApiManager } from "./ApiManager";
import React, { createContext, useState, useCallback } from "react";

const ApiManagerContext = createContext();

const ApiManagerProvider = ({ children }) => {
  // eslint-disable-next-line
  const [api, setApi] = useState(new ApiManager());
  const get = useCallback(
    async (url, query = {}, headers) => {
      if (Object.keys(query).length > 0) {
        url += "?" + new URLSearchParams(query).toString();
      }
      const response = await api.get(url, { ...headers });
      return response;
    },
    [api]
  );

  const post = useCallback(
    async (url, data, headers) => {
      const response = await api.post(url, data, { headers });
      return response;
    },
    [api]
  );

  const delete_request = useCallback(
    async (url, headers) => {
      await api.delete(url, { headers });
    },
    [api]
  );

  const upload = useCallback(
    async (url, data, onUploadProgress, headers) => {
      const response = await api.post(url, data, {
        onUploadProgress,
        headers,
      });
      return response;
    },
    [api]
  );

  return (
    <ApiManagerContext.Provider
      value={{ api, get, post, delete_request, upload }}
    >
      {children}
    </ApiManagerContext.Provider>
  );
};

export { ApiManagerProvider, ApiManagerContext };
