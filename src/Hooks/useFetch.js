import { useEffect, useState } from "react";

export default function useFetch({ url, query, method = "GET" }) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    const queryParams = query ? new URLSearchParams(query).toString() : null;

    fetch(`${url}${queryParams ? `?${queryParams}` : ""}`, { method })
      .then((r) => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}
