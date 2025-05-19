
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FactsContext = createContext(null);

const FactsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/facts/Facts.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const contextValue = useMemo(() => ({ data, loading, error }), [data, loading, error]);

  return (
    <FactsContext.Provider value={contextValue}>
      {children}
    </FactsContext.Provider>
  );
};

export const useFacts = () => {
  const context = useContext(FactsContext);
  if (!context) throw new Error("useFacts must be used within a FactsContextProvider");
  return context;
};

export default FactsContextProvider;
