import React from 'react';
import { MoreHorizontal, Star } from 'lucide-react';

import DashboardCard from './DashboardCard';

const comments = [
  {
    author: 'Matt McGill',
    date: 'Today · 5:32 pm',
    text: "That's a great idea! I'm sure we could start this project as soon as possible.",
    starred: true,
  },
  {
    author: 'Tim Collins',
    date: 'Today · 4:21 pm',
    text: "Let’s meet tomorrow. I have several updates to share with you.",
    starred: false,
  },
  {
    author: 'Kate Stone',
    date: 'Yesterday · 7:10 pm',
    text: 'The documents are ready. Please check the shared folder and let me know.',
    starred: false,
  },
];

const cardControls = (
  <button className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600" aria-label="Kart seçenekleri">
    <MoreHorizontal className="h-4 w-4" />
  </button>
);

export default function CommentsList() {
  return (
    <DashboardCard title="Comments" headerControls={cardControls}>
      <div className="flex flex-col divide-y divide-gray-100">
        {comments.map((comment) => (
          <div key={comment.author} className="flex items-start gap-4 py-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-semibold text-white">
              {comment.author
                .split(' ')
                .map((part) => part[0])
                .join('')
                .slice(0, 2)}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">{comment.author}</span>
                <span className="text-xs uppercase tracking-wide text-gray-400">{comment.date}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{comment.text}</p>
            </div>

            <button
              className={`mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm transition ${
                comment.starred
                  ? 'border-amber-300 text-amber-500 hover:bg-amber-50'
                  : 'border-gray-200 text-gray-400 hover:bg-gray-100 hover:text-amber-500'
              }`}
              aria-label={comment.starred ? 'Yorumu favorilerden kaldır' : 'Yorumu favorilere ekle'}
            >
              <Star className={`h-4 w-4 ${comment.starred ? 'fill-current' : ''}`} />
            </button>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}