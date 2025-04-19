import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../dashboard/Navbar";

const TotalLife = () => {
  const totalLife = 85; // percentage
  const lastChecked = "18 April 2025, 4:30 PM";

  return (
    <div className="min-h-screen bg-yellow-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-yellow-700 mb-6">⚙️ Total Vehicle Life</h1>

        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Current Health</h2>
            <p className={`text-3xl font-bold ${totalLife < 50 ? "text-red-600" : "text-green-600"}`}>{totalLife}%</p>
            <p className="text-sm text-gray-500">Last checked: {lastChecked}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-700">What does this mean?</h2>
            <p className="text-gray-700 mt-1">
              This indicates overall vehicle health based on component conditions and usage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-700">Recommended Actions</h2>
            {totalLife < 50 ? (
              <p className="text-red-600">⚠️ Service recommended soon.</p>
            ) : (
              <p className="text-green-700">✅ Vehicle health is good.</p>
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

export default TotalLife;
