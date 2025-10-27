'use client'; 

import React, { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
  name: string;
  defaultChecked?: boolean;
}

export default function ToggleSwitch({ label, name, defaultChecked = false }: ToggleSwitchProps) {
  const [enabled, setEnabled] = useState(defaultChecked);

  return (
    // GÜNCELLEME: 'py-4' sınıfı eklendi.
    // Bu, bileşenin 'FormRow' ile aynı dikey boşluğa sahip olmasını sağlar.
    <div className="flex items-center justify-between py-4"> 
      <span className="text-sm font-medium text-gray-800">{label}</span>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
        className="hidden" // Gerçek checkbox'ı gizle
      />
      <label
        htmlFor={name}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${enabled ? 'bg-blue-600' : 'bg-gray-200'}`}
      >
        <span
          aria-hidden="true"
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
            ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </label>
    </div>
  );
}