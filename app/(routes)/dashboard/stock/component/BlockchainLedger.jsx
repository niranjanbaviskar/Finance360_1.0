"use client";

import { useEffect, useState } from "react";
import { fetchData } from "../utils";
import { API_URLS } from "../apiConfig";
import { Lock } from "lucide-react";

const BlockchainLedger = () => {
  const [ledger, setLedger] = useState([]);

  useEffect(() => {
    const getLedgerData = async () => {
      const data = await fetchData(API_URLS.blockchainLedger);
      if (data) setLedger(data.ledger);
    };
    getLedgerData();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold flex items-center">
        <Lock className="mr-2 text-gray-500" /> Blockchain Ledger
      </h2>
      {ledger.length ? (
        <ul>
          {ledger.map((entry, index) => (
            <li key={index} className="p-2 border-b">{entry}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlockchainLedger;
