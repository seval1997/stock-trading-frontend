import React from "react";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";
import "./WatchListCard.css";

function WatchListCard({ stock }) {
    const { theme } = useTheme();

    if (!stock) return null;

    const isDecline = stock.close < stock.open;
    const percentChange = (((stock.close - stock.open) / stock.open) * 100).toFixed(2);

    return (
        <div
            className={`stock-card-horizontal ${isDecline ? "decline" : "gain"} ${theme === "light" ? "light-theme" : "dark-theme"
                }`}
        >
            <div className="stock-row">
                <div className="stock-cell symbol">{stock.symbol}</div>
                <div className="stock-cell">Open: {stock.open}</div>
                <div className="stock-cell">Close: {stock.close}</div>
                <div className="stock-cell">High: {stock.high}</div>
                <div className="stock-cell">Low: {stock.low}</div>
                <div className="stock-cell">Vol: {stock.volume.toLocaleString()}</div>
                <div className={`stock-cell percent ${isDecline ? "down" : "up"}`}>
                    {isDecline ? `${percentChange}%` : `+${percentChange}%`}
                </div>
                <div className="stock-cell trend">
                    {isDecline ? (
                        <MdTrendingDown className="trend-icon down" />
                    ) : (
                        <MdTrendingUp className="trend-icon up" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default WatchListCard;
