export interface FinancialData {
  period: string;
  revenue: number;
  expenses: number;
  profit: number;
  orders: number;
  customers: number;
}

export const sampleFinancialData: FinancialData[] = [
  {
    period: "Jan 2024",
    revenue: 15000,
    expenses: 8000,
    profit: 7000,
    orders: 150,
    customers: 120,
  },
  {
    period: "Feb 2024",
    revenue: 18000,
    expenses: 8500,
    profit: 9500,
    orders: 180,
    customers: 145,
  },
  {
    period: "Mar 2024",
    revenue: 22000,
    expenses: 9000,
    profit: 13000,
    orders: 210,
    customers: 165,
  },
];

export const summaryData = {
  totalRevenue: 55000,
  totalExpenses: 25500,
  totalProfit: 29500,
  totalOrders: 540,
  averageOrderValue: 101.85,
};
