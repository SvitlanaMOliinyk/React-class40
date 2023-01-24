import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log("Error", error.message);
        setIsLoading(false);
        setError("Download is failed");
      }
    };
    getProduct();
  }, [url]);
  return { data, isLoading, error };
}

export default useFetch;
