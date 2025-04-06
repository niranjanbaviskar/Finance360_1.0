"use client";

import { useEffect, useState } from "react";
import { fetchData } from "../utils";
import { API_URLS } from "../apiConfig";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PortfolioAnalysis = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const getPortfolio = async () => {
      const data = await fetchData(API_URLS.portfolioAnalysis);
      if (data) setPortfolio(data.holdings);
    };
    getPortfolio();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold">Portfolio Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={portfolio} dataKey="value" nameKey="stock" cx="50%" cy="50%" outerRadius={100} label>
            {portfolio.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioAnalysis;
