import React from 'react';
import { Mail, MoreHorizontal, Phone } from 'lucide-react';

import DashboardCard from './DashboardCard';

const contacts = [
  {
    name: 'Tim Collins',
    email: 'timcollins@gmail.com',
    phone: '+1 (800) 555-0123',
    role: "Director at Tony's",
  },
  {
    name: 'Maggy Smith',
    email: 'maggysmith@gmail.com',
    phone: '+1 (800) 555-0145',
    role: 'PR Manager',
  },
  {
    name: 'Molly Bridjet',
    email: 'mollybr@gmail.com',
    phone: '+1 (800) 555-0199',
    role: 'Assistant',
  },
  {
    name: 'Robert Jackson',
    email: 'jackson.robert@gmail.com',
    phone: '+1 (800) 555-0188',
    role: 'Sales Lead',
  },
];

const cardControls = (
  <button className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600" aria-label="Kart seçenekleri">
    <MoreHorizontal className="h-4 w-4" />
  </button>
);

export default function ContactsList() {
  return (
    <DashboardCard title="Contacts" headerControls={cardControls}>
      <div className="flex flex-col divide-y divide-gray-100">
        {contacts.map((contact) => (
          <div key={contact.email} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-sm font-semibold text-white">
                {contact.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 transition hover:border-blue-400 hover:text-blue-600">
                <Mail className="h-3.5 w-3.5" />
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 transition hover:border-emerald-400 hover:text-emerald-600">
                <Phone className="h-3.5 w-3.5" />
                {contact.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}