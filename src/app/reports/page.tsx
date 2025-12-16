"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { sampleFinancialData, summaryData } from "../lib/sampleData";

// Dynamically import the entire PDF component to avoid minification issues
const PDFExportComponent = dynamic(
  () => import("../components/PDFExportComponent"),
  {
    ssr: false,
    loading: () => (
      <button
        disabled
        className="bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Loading PDF...
      </button>
    ),
  }
);

export default function Reports() {
  const [showPreview, setShowPreview] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Financial Reports
          </h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-green-800 font-semibold">Total Revenue</h3>
              <p className="text-2xl font-bold text-green-900">
                ${summaryData.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-blue-800 font-semibold">Total Profit</h3>
              <p className="text-2xl font-bold text-blue-900">
                ${summaryData.totalProfit.toLocaleString()}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-purple-800 font-semibold">Total Orders</h3>
              <p className="text-2xl font-bold text-purple-900">
                {summaryData.totalOrders}
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="text-orange-800 font-semibold">Avg Order Value</h3>
              <p className="text-2xl font-bold text-orange-900">
                ${summaryData.averageOrderValue}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {/* PDF Download Button */}
            {mounted && <PDFExportComponent />}

            <button
              onClick={() => setShowPreview(!showPreview)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
            >
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
          </div>

          {/* PDF Preview */}
          {showPreview && mounted && (
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 text-center">
                <p className="text-gray-600">PDF preview would appear here</p>
                <p className="text-sm text-gray-500">
                  Use the download button above to get your PDF report
                </p>
              </div>
            </div>
          )}

          {/* Data Table Preview */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              Monthly Financial Data
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Period
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Expenses
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Profit
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Orders
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleFinancialData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.period}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                        ${row.revenue.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">
                        ${row.expenses.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                        ${row.profit.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {row.orders}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
