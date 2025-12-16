"use client";

import { useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import {
  UserCircleIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  UsersIcon,
  DocumentChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = ({ setSection }) => {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Sample data
  const financialData = {
    totalRevenue: 55000,
    totalProfit: 29500,
    totalOrders: 540,
    averageOrderValue: 101.85,
  };

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales 2025",
        data: [3000, 4500, 2800, 5100, 4200, 6800],
        borderColor: "rgb(59, 130, 246)",
        tension: 0.4,
      },
    ],
  };

  const productData = {
    labels: ["Electronics", "Clothing", "Books", "Food"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          "rgb(59, 130, 246)",
          "rgb(34, 197, 94)",
          "rgb(249, 115, 22)",
          "rgb(168, 85, 247)",
        ],
      },
    ],
  };

  const sampleFinancialData = [
    {
      period: "Jan 2024",
      revenue: 15000,
      expenses: 8000,
      profit: 7000,
      orders: 150,
    },
    {
      period: "Feb 2024",
      revenue: 18000,
      expenses: 8500,
      profit: 9500,
      orders: 180,
    },
    {
      period: "Mar 2024",
      revenue: 22000,
      expenses: 9000,
      profit: 13000,
      orders: 210,
    },
  ];

  const handleSwitchContent = (sectionName) => {
    setSection(sectionName);
  };
  // Sidebar Component
  const Sidebar = () => {
    const menuItems = [
      { id: "dashboard", label: "Dashboard", icon: HomeIcon },
      { id: "reports", label: "Reports", icon: DocumentChartBarIcon },
    ];

    return (
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
          <button
            onClick={() => {
              handleSwitchContent("MyPracticeSection");
            }}
          >
            Switchcontent
          </button>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                activeSection === item.id
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    );
  };

  // Reports Component
  const Reports = () => (
    <div className="mt-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Financial Reports
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-green-800 font-semibold">Total Revenue</h3>
            <p className="text-2xl font-bold text-green-900">
              ${financialData.totalRevenue.toLocaleString()}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-blue-800 font-semibold">Total Profit</h3>
            <p className="text-2xl font-bold text-blue-900">
              ${financialData.totalProfit.toLocaleString()}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="text-purple-800 font-semibold">Total Orders</h3>
            <p className="text-2xl font-bold text-purple-900">
              {financialData.totalOrders}
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="text-orange-800 font-semibold">Avg Order Value</h3>
            <p className="text-2xl font-bold text-orange-900">
              ${financialData.averageOrderValue}
            </p>
          </div>
        </div>

        {/* PDF Export Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200">
            Download Financial PDF
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200">
            Export Sales Report
          </button>
        </div>

        {/* Data Table */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Monthly Financial Data</h2>
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
  );

  // Main Dashboard Content
  const DashboardContent = () => (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <ChartBarIcon className="h-12 w-12 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">
                ${financialData.totalRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-green-500">+12% from last month</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <ShoppingBagIcon className="h-12 w-12 text-green-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-2xl font-bold text-gray-800">
                {financialData.totalOrders}
              </p>
              <p className="text-xs text-blue-500">12 new today</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <UsersIcon className="h-12 w-12 text-purple-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Profit</p>
              <p className="text-2xl font-bold text-gray-800">
                ${financialData.totalProfit.toLocaleString()}
              </p>
              <p className="text-xs text-green-500">+25% this month</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <DocumentChartBarIcon className="h-12 w-12 text-orange-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Avg Order Value</p>
              <p className="text-2xl font-bold text-gray-800">
                ${financialData.averageOrderValue}
              </p>
              <p className="text-xs text-blue-500">Reports Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveSection("reports")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition duration-200 flex items-center justify-center"
          >
            <DocumentChartBarIcon className="h-5 w-5 mr-2" />
            View Financial Reports
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition duration-200 flex items-center justify-center">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            Generate Sales Report
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition duration-200 flex items-center justify-center">
            <UsersIcon className="h-5 w-5 mr-2" />
            Customer Analytics
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Sales Overview
          </h2>
          <div className="h-80">
            <Line data={salesData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Product Categories
          </h2>
          <div className="h-80">
            <Doughnut
              data={productData}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 bg-gray-200 overflow-y-auto">
        <div className="p-4 relative">
          {/* Header */}
          <header className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Ecommerce Admin
              </h1>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Online
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <UserCircleIcon className="h-8 w-8 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Admin User
                  </p>
                  <p className="text-xs text-gray-500">admin@shop.com</p>
                </div>
              </div>
            </div>
          </header>

          {/* Dynamic Content */}
          {activeSection === "reports" ? <Reports /> : <DashboardContent />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
