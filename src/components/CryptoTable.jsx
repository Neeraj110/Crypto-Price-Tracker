/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifyCryptoData } from "../utils/mockWebSocket";
import { updateCrypto } from "../redux/cryptoSlice";
import CryptoRows from "./CryptoRows";
import CryptoCards from "./CryptoCards";

function CryptoTable() {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState(
    window.innerWidth > 768 ? "table" : "card"
  );

  const getCryptoData = () => {
    const data = modifyCryptoData(crypto);
    dispatch(updateCrypto(data));
  };

  useEffect(() => {
    if (crypto.length) setIsLoading(false);
    const interval = setInterval(getCryptoData, 2000);
    return () => clearInterval(interval);
  }, [crypto.length, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setViewMode(window.innerWidth > 768 ? "table" : "card");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewModeChange = () => {
    setViewMode((prevMode) => (prevMode === "table" ? "card" : "table"));
  };

  if (isLoading) {
    return (
      <main className="container mx-auto p-4 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Crypto Price Tracker
        </h1>
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 py-2 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center mt-5">
        Crypto Price Tracker
      </h1>
      <div className="md:hidden mb-4">
        <button
          onClick={handleViewModeChange}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Switch to {viewMode === "table" ? "Card" : "Table"} View
        </button>
      </div>

      {viewMode === "table" && (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>1h %</th>
                <th>24h %</th>
                <th>7d %</th>
                <th>Market Cap</th>
                <th>Volume(24h)</th>
                <th>Circulating Supply</th>
                <th>Last 7 days</th>
              </tr>
            </thead>
            <CryptoRows crypto={crypto} />
          </table>
        </div>
      )}

      {viewMode === "card" && <CryptoCards crypto={crypto} />}
    </main>
  );
}

export default CryptoTable;
