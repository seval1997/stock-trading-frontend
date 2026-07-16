import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";

function Content() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <DashboardHeader />
                <div className="p-4" style={{ marginTop: "60px" }}>
                    <div className="card p-3">
                        <h1>Hello World</h1>
                        <p>This is your dashboard content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>
    );
}
