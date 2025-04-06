"use client";

import { useEffect, useState } from "react";
import { fetchData } from "../utils";
import { API_URLS } from "../apiConfig";
import { RefreshCcw } from "lucide-react";

const AutoRebalancer = () => {
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    const getRebalanceData = async () => {
      const data = await fetchData(API_URLS.portfolioAnalysis);
      setRecommendation(data ? data.recommendation : "No data available");
    };
    getRebalanceData();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold flex items-center">
        <RefreshCcw className="mr-2 text-purple-500" /> Auto Rebalancer
      </h2>
      <p>{recommendation}</p>
    </div>
  );
};

export default AutoRebalancer;
