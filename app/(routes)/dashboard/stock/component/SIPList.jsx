"use client";

import { useEffect, useState } from "react";
import { fetchData } from "../utils";
import { API_URLS } from "../apiConfig";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const SIPList = () => {
  const [sipData, setSipData] = useState([]);

  useEffect(() => {
    const getSipData = async () => {
      const data = await fetchData(API_URLS.sipData);
      if (data) setSipData(data.sipHoldings);
    };
    getSipData();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold">SIP Investment Summary</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sipData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="investment" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SIPList;
