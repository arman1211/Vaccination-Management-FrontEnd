import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DashboardDataContext = createContext();

export const useDashboardData = () => {
  return useContext(DashboardDataContext);
};

export const DashboardDataProvider = ({ children }) => {
  const [vaccines, setVaccines] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vaccination-management-backend-drf.vercel.app/vaccine-campaign/booking/"
        );
        setVaccines(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardDataContext.Provider
      value={{ vaccines, loading, error, setVaccines }}
    >
      {children}
    </DashboardDataContext.Provider>
  );
};
