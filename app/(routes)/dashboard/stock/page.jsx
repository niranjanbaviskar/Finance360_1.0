"use client";

import StockList from "./component/StockList";
import SIPList from "./component/SIPList";
import PortfolioAnalysis from "./component/PortfolioAnalysis";
import BlockchainLedger from "./component/BlockchainLedger";

const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Investment Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <StockList />
        <SIPList />
        <PortfolioAnalysis />
        <BlockchainLedger />
      </div>
    </div>
  );
};

export default Dashboard;
