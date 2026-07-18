import React from "react";
import WatchListCard from "../WatchListCard/WatchListCard";
import "./WatchListCard.css";

const dummyStocks = [
    { symbol: "AAPL", open: 190.2, close: 192.5, high: 195.0, low: 189.8, volume: 1203400 },
    { symbol: "MSFT", open: 330.1, close: 328.7, high: 332.0, low: 327.5, volume: 980200 },
    { symbol: "GOOGL", open: 2800.0, close: 2825.5, high: 2830.0, low: 2785.0, volume: 560000 },
    { symbol: "AMZN", open: 135.0, close: 137.2, high: 138.0, low: 134.5, volume: 1500000 },
    { symbol: "TSLA", open: 720.0, close: 710.5, high: 725.0, low: 705.0, volume: 2100000 },
    { symbol: "NFLX", open: 450.0, close: 455.0, high: 460.0, low: 448.0, volume: 430000 },
    { symbol: "NVDA", open: 800.0, close: 815.0, high: 820.0, low: 795.0, volume: 890000 },
    { symbol: "META", open: 310.0, close: 312.5, high: 315.0, low: 308.0, volume: 720000 },
    { symbol: "IBM", open: 140.0, close: 141.2, high: 142.0, low: 139.5, volume: 300000 },
    { symbol: "ORCL", open: 120.0, close: 119.5, high: 121.0, low: 118.5, volume: 250000 },
    { symbol: "INTC", open: 35.0, close: 34.8, high: 36.0, low: 34.5, volume: 1100000 },
    { symbol: "AMD", open: 95.0, close: 97.0, high: 98.0, low: 94.5, volume: 1300000 },
    { symbol: "SAP", open: 145.0, close: 146.5, high: 147.0, low: 144.0, volume: 210000 },
    { symbol: "ADBE", open: 520.0, close: 525.0, high: 528.0, low: 518.0, volume: 400000 },
    { symbol: "UBER", open: 45.0, close: 46.2, high: 47.0, low: 44.8, volume: 890000 },
    { symbol: "LYFT", open: 12.0, close: 12.5, high: 13.0, low: 11.8, volume: 560000 },
    { symbol: "SHOP", open: 65.0, close: 66.0, high: 67.0, low: 64.5, volume: 320000 },
    { symbol: "SQ", open: 70.0, close: 71.5, high: 72.0, low: 69.5, volume: 410000 },
    { symbol: "PYPL", open: 85.0, close: 84.5, high: 86.0, low: 83.5, volume: 500000 },
    { symbol: "TWTR", open: 40.0, close: 41.0, high: 42.0, low: 39.5, volume: 600000 },
];

function Watchlist() {
    return (
        <div className="watchlist-container">
            {dummyStocks.map((stock, index) => (
                <WatchListCard key={index} stock={stock} />
            ))}
        </div>
    );
}

export default Watchlist;
