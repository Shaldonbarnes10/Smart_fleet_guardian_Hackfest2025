import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../dashboard/Navbar";

const OilLevel = () => {
  const oilLevel = "Good"; // Example value from ML/backend
  const lastChecked = "18 April 2025, 4:30 PM";

  return (
    <div className="min-h-screen bg-yellow-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-yellow-700 mb-6">🛢️ Oil Level Details</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Current Status</h2>
            <p className={`text-3xl font-bold ${oilLevel === "Low" ? "text-red-600" : "text-green-600"}`}>{oilLevel}</p>
            <p className="text-sm text-gray-500">Last checked: {lastChecked}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-700">What does this mean?</h2>
            <p className="text-gray-700 mt-1">
              Oil keeps engine parts lubricated, cool, and clean. A good oil level means your engine is protected and running efficiently.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-700">Recommended Actions</h2>
            {oilLevel === "Low" ? (
              <p className="text-red-600">⚠️ Refill the engine oil immediately to prevent damage.</p>
            ) : (
              <p className="text-green-700">✅ No action needed. You're good to go!</p>
            )}
          </div>

          <Link
            to="/MoreStatistics"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl mt-6"
          >
            ← Back to More Statistics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OilLevel;
