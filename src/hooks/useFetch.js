import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (initialYear = "2022", initialMake = "bmw") => {
  const [makeModels, setMakeModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMake, setSelectedMake] = useState(initialMake);

  useEffect(() => {
    const fetchMakeModels = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${selectedMake}&year=2020`
        );
        setMakeModels(response.data.Models);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMakeModels();
  }, [selectedMake]);

  const handleMakeChange = (make) => {
    setSelectedMake(make);
  };

  return {
    makeModels,
    loading,
    error,
    selectedMake,
    handleMakeChange,
  };
};

export default useFetch;
