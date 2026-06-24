import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/allPositions`)
      .then((res) => {
        setAllPositions(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Failed to load positions:", err);
        setAllPositions([]);
      });
  }, []);

  const formatDecimal = (value) =>
    Number.isFinite(Number(value)) ? Number(value).toFixed(2) : "-";

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avg);
              const price = Number(stock.price);
              const curValue = Number.isFinite(price * qty) ? price * qty : 0;
              const isProfit = Number.isFinite(avg)
                ? curValue - avg * qty >= 0
                : false;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product || "-"}</td>
                  <td>{stock.name || "-"}</td>
                  <td>{qty}</td>
                  <td>{formatDecimal(avg)}</td>
                  <td>{formatDecimal(price)}</td>
                  <td className={profClass}>
                    {formatDecimal(Number.isFinite(avg) ? curValue - avg * qty : NaN)}
                  </td>
                  <td className={dayClass}>{stock.day ?? "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
