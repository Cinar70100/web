import React from 'react';
import Image from 'next/image'; // Next.js'in optimize edilmiş resim bileşeni
import DashboardCard from './DashboardCard';
// Yorumlar demo verisi
const comments = [
  {
    author: 'Matt McGill',
    avatar: '/images/avatars/avatar1.png', // Bu resimleri daha sonra ekleyeceğiz, şimdilik yolunu belirtiyoruz
    date: 'Today 12:45',
    text: "That's a great idea! I'm sure we could start this project as soon as possible.",
    starred: true,
  },
  {
    author: 'Tim Collins',
    avatar: '/images/avatars/avatar2.png',
    date: 'Today 12:45',
    text: "Let's meet tomorrow!",
    starred: false,
  },
];

// Kart başlığı sağındaki kontroller
const cardControls = (
  <button className="hover:text-gray-600">&#8230;</button> // '...' ikonu
);

export default function CommentsList() {
  return (
    <DashboardCard title="Comments" headerControls={cardControls}>
      <div className="flex flex-col divide-y divide-gray-200">
        {comments.map((comment, index) => (
          <div key={index} className="flex p-4 hover:bg-gray-50">
            {/* Avatar Alanı */}
            <div className="mr-4 flex-shrink-0">
              {/* Geçici Avatar: Gerçek resim dosyaları eklenene kadar
                  kullanıcı adının baş harfini göstereceğiz. */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
                {comment.author.charAt(0)}
              </div>
              {/* // Gerçek Image bileşeni (dosyaları ekleyince açılacak)
                <Image
                  src={comment.avatar}
                  alt={`${comment.author} avatar`}
                  width={40}
                  height={40}
                  className="rounded-full"
                /> 
              */}
            </div>
            
            {/* Yorum İçeriği */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{comment.author}</span>
                <span className="text-xs text-gray-500">{comment.date}</span>
              </div>
              <p className="mt-1 text-sm text-gray-700">{comment.text}</p>
              
              {/* Yorum Altı İkonlar (Star) */}
              <div className="mt-2">
                <button className={`text-sm ${comment.starred ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500`}>
                  &#9733; {/* Star icon */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}