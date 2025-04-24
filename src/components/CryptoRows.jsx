import React from "react";
import { formatNumber } from "../utils/formatNumber";

const CryptoRows = ({ crypto }) => {
  return (
    <tbody className="text-sm text-gray-700 dark:text-gray-400">
      {crypto.map((coin) => (
        <tr key={coin.id}>
          <td>{coin.id}</td>
          <td>
            {coin.name} <span className="text-gray-500">{coin.symbol}</span>
          </td>
          <td
            className={`${coin.price > 0 ? "text-green-500" : "text-red-600"}`}
          >
            ${Number(coin.price).toFixed(2)}
          </td>
          <td
            className={`${
              coin.change1h > 0 ? "text-green-500" : "text-red-600"
            }`}
          >
            <span>{coin.change1h > 0 ? "↑" : "↓"}</span>{" "}
            {Math.abs(coin.change1h).toFixed(2)}%
          </td>
          <td
            className={`${
              coin.change24h > 0 ? "text-green-500" : "text-red-600"
            }`}
          >
            <span>{coin.change24h > 0 ? "↑" : "↓"}</span>{" "}
            {Math.abs(coin.change24h).toFixed(2)}%
          </td>
          <td
            className={`${
              coin.change7d > 0 ? "text-green-500" : "text-red-600"
            }`}
          >
            <span>{coin.change7d > 0 ? "↑" : "↓"}</span>{" "}
            {Math.abs(coin.change7d).toFixed(2)}%
          </td>
          <td>{formatNumber(coin.marketCap)}</td>
          <td>{formatNumber(coin.volume24h)}</td>
          <td>{coin.circulatingSupply}M</td>
          <td>
            <img className="w-24" src="/graph.png" alt="" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default React.memo(CryptoRows);
