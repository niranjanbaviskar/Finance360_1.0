"use client";

import { useEffect, useState } from "react";
import { fetchData } from "../utils";
import { API_URLS } from "../apiConfig";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const StockList = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const getStockData = async () => {
      const data = await fetchData(API_URLS.stockData);
      if (data) setStockData(data.stocks);
    };
    getStockData();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold">Daily Stock Market Analysis</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={stockData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockList;
