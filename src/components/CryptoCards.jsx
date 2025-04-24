import React from "react";
import { formatNumber } from "../utils/formatNumber";

const CryptoCards = ({ crypto }) => {
  return (
    <div className="grid grid-cols-1 gap-6]">
      {crypto.map((coin) => (
        <div key={coin.id} className="bg-white rounded-lg shadow-md p-5 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span className="font-bold mr-2">{coin.name}</span>
              <span className="text-gray-500 text-sm">{coin.symbol}</span>
            </div>
            <div
              className={`font-semibold ${
                coin.price > 0 ? "text-green-500" : "text-red-600"
              }`}
            >
              ${Number(coin.price).toFixed(2)}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div>
              <div className="text-xs text-gray-500">1h %</div>
              <div
                className={`${
                  coin.change1h > 0 ? "text-green-500" : "text-red-600"
                }`}
              >
                <span>{coin.change1h > 0 ? "↑" : "↓"}</span>{" "}
                {Math.abs(coin.change1h).toFixed(2)}%
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500">24h %</div>
              <div
                className={`${
                  coin.change24h > 0 ? "text-green-500" : "text-red-600"
                }`}
              >
                <span>{coin.change24h > 0 ? "↑" : "↓"}</span>{" "}
                {Math.abs(coin.change24h).toFixed(2)}%
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500">7d %</div>
              <div
                className={`${
                  coin.change7d > 0 ? "text-green-500" : "text-red-600"
                }`}
              >
                <span>{coin.change7d > 0 ? "↑" : "↓"}</span>{" "}
                {Math.abs(coin.change7d).toFixed(2)}%
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <div className="text-gray-500">Market Cap</div>
              <div>{formatNumber(coin.marketCap)}</div>
            </div>
            <div>
              <div className="text-gray-500">Volume (24h)</div>
              <div>{formatNumber(coin.volume24h)}</div>
            </div>
            <div>
              <div className="text-gray-500">Supply</div>
              <div>{coin.circulatingSupply}M</div>
            </div>
            <div>
              <div className="text-gray-500">Last 7 days</div>
              <img className="h-8 w-20" src="/graph.png" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CryptoCards);
