import { useEffect, useState } from "react";
import { api } from "../utils/api";
import getErrorMessage from "../utils/erorMassages";
export default function useAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);

  const sendRequest = async ({
    url,
    method = "GET",
    body = null,
    headers = {},
  }) => {
    setLoading(true);
    setError(null);
    try {
      const { data, status } = await api({
        url,
        method,
        data: body,
        headers,
      });
      setStatus(status);
      setData(data);
      return data;
    } catch (error) {
      console.error(error);
      setStatus(error.status);
      setError(getErrorMessage(error.status));
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, sendRequest, status };
}
