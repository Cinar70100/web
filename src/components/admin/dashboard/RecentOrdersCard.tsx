import React from "react";
import { MoreHorizontal, RefreshCcw, X } from "lucide-react";

import DashboardCard from "./DashboardCard";
import Badge from "./Badge";

const recentOrders = [
  {
    client: "Thomas Bayer",
    status: { text: "Paid", type: "success" as const },
    orderId: "#7190",
    sales: "$356",
    date: "Today 6:36",
  },
  {
    client: "Matt McGill",
    status: { text: "Paid", type: "success" as const },
    orderId: "#7191",
    sales: "$220",
    date: "Today 4:56",
  },
  {
    client: "Kate Stone",
    status: { text: "Pending", type: "warning" as const },
    orderId: "#7192",
    sales: "$482",
    date: "Yesterday 7:32",
  },
  {
    client: "Tim Collins",
    status: { text: "Paid", type: "success" as const },
    orderId: "#7193",
    sales: "$300",
    date: "Yesterday 5:12",
  },
];

const cardControls = (
  <div className="flex items-center gap-2 text-gray-400">
    <button className="rounded-full p-1 hover:bg-gray-100 hover:text-gray-600" aria-label="Kartı yenile">
      <RefreshCcw className="h-4 w-4" />
    </button>
    <button className="rounded-full p-1 hover:bg-gray-100 hover:text-gray-600" aria-label="Kart seçenekleri">
      <MoreHorizontal className="h-4 w-4" />
    </button>
    <button className="rounded-full p-1 hover:bg-gray-100 hover:text-gray-600" aria-label="Kartı kapat">
      <X className="h-4 w-4" />
    </button>
  </div>
);

export default function RecentOrdersCard() {
  return (
    <DashboardCard title="Recent orders" headerControls={cardControls} bodyClassName="p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">Client</th>
              <th scope="col" className="px-6 py-3">Orders</th>
              <th scope="col" className="px-6 py-3">Sales</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white text-sm text-gray-600">
            {recentOrders.map((order) => (
              <tr key={order.orderId} className="transition hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-semibold text-gray-900">
                  {order.client}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <Badge text={order.status.text} type={order.status.type} />
                    <span className="text-xs text-gray-400">{order.orderId}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                  {order.sales}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-400">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}
