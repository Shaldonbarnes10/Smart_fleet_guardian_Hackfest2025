import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import logo from "../assets/react.svg";

export default function Statistics() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Navbar />
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-yellow-700">Fleet Guardian - Statistics</h1>
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      <div className="px-6 md:px-16 py-6 space-y-8">
        {/* ✅ Current Statistics */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Statistics</h2>
          <ul className="space-y-3 text-gray-700 text-base">
            <li>✅ Tyre Pressure: 33 psi</li>
            <li>🔧 Total Life: 85%</li>
            <li>🌡 Engine Temperature: 90°C</li>
            <li>🛢 Oil Level: Good</li>
          </ul>
        </div>

        {/* 📊 Previous Statistics */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Previous Statistics</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Tyre Pressure: 32 psi (12 Apr 2025)</li>
            <li>Engine Temp: 89°C (10 Apr 2025)</li>
          </ul>
        </div>

        {/* 🔁 Redirect Button */}
        <div className="text-center">
          <Link to="/moreStatistics">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition cursor-pointer">
              View More Statistics
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
