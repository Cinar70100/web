import React from "react";
import { MoreHorizontal } from "lucide-react";

import DashboardCard from "./DashboardCard";
import Badge from "./Badge";

const recentTickets = [
  {
    subject: "Payment #204",
    status: { text: "Open", type: "success" as const },
    department: "Support",
    date: "Today 9:30",
  },
  {
    subject: "Contract signed",
    status: { text: "Progress", type: "warning" as const },
    department: "Management",
    date: "Today 8:20",
  },
  {
    subject: "New project quotes",
    status: { text: "Closed", type: "info" as const },
    department: "Sales",
    date: "Yesterday 7:45",
  },
  {
    subject: "Tax documentation",
    status: { text: "Open", type: "success" as const },
    department: "Accounting",
    date: "Yesterday 6:15",
  },
];

const cardControls = (
  <button className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600" aria-label="Kart seçenekleri">
    <MoreHorizontal className="h-4 w-4" />
  </button>
);

export default function RecentTicketsCard() {
  return (
    <DashboardCard title="Recent tickets" headerControls={cardControls} bodyClassName="p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">Subject</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Department</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white text-sm text-gray-600">
            {recentTickets.map((ticket) => (
              <tr key={ticket.subject} className="transition hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 font-semibold text-gray-900">
                  {ticket.subject}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Badge text={ticket.status.text} type={ticket.status.type} />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                  {ticket.department}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-400">
                  {ticket.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}
