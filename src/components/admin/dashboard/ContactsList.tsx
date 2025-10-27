import React from 'react';
import Image from 'next/image';
import DashboardCard from './DashboardCard';

// Kişiler demo verisi
const contacts = [
  {
    name: 'Tim Collins',
    email: 'timcollins@gmail.com',
    avatar: '/images/avatars/avatar2.png',
    role: "Director at Tony's",
  },
  {
    name: 'Maggy Smith',
    email: 'maggysmith@gmail.com',
    avatar: '/images/avatars/avatar3.png',
    role: 'PR Manager',
  },
  {
    name: 'Molly Bridjet',
    email: 'mollybr@gmail.com',
    avatar: '/images/avatars/avatar4.png',
    role: 'Assistan', // Görseldeki yazım hatası (Assistan) korundu
  },
  {
    name: 'Maggy Smith', // Görselde isim tekrar ediyor
    email: 'maggysmith@gmail.com',
    avatar: '/images/avatars/avatar3.png',
    role: 'PR Manager',
  },
];

export default function ContactsList() {
  return (
    <DashboardCard title="Contacts">
      <div className="flex flex-col divide-y divide-gray-200">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center p-4 hover:bg-gray-50">
            {/* Avatar Alanı */}
            <div className="mr-4 flex-shrink-0">
              {/* Geçici Avatar */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                {contact.name.charAt(0)}
              </div>
              {/* // Gerçek Image bileşeni
                <Image
                  src={contact.avatar}
                  alt={`${contact.name} avatar`}
                  width={40}
                  height={40}
                  className="rounded-full"
                /> 
              */}
            </div>

            {/* Kişi Bilgisi */}
            <div className="flex-1">
              <span className="block font-semibold text-gray-900">{contact.name}</span>
              <span className="block text-sm text-gray-500">{contact.email}</span>
            </div>

            {/* Rol Bilgisi */}
            <div className="ml-4 text-right">
              <span className="block text-sm font-medium text-gray-700">{contact.role}</span>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}