import React from 'react';

interface ColorPickerProps {
  label: string;
  name: string;
  defaultValue: string;
}

export default function ColorPicker({ label, name, defaultValue }: ColorPickerProps) {
  return (
    <div>
      {/* Etiket */}
      <label htmlFor={name} className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      <div className="mt-1">
        {/* Bu, tarayıcının yerel renk seçicisidir.
          'p-0' ve 'h-10' sınıfları, rengin kutuyu doldurmasını sağlar
          ve ona standart bir yükseklik verir.
        */}
        <input
          type="color"
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="w-full h-10 p-0 border border-gray-300 rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
}