// src/components/admin/form/FileInput.tsx
import React from 'react';
import Link from 'next/link';
import { FormRow } from './FormHelpers'; // FormRow'u aynı klasörden alıyoruz

interface FileInputProps {
  label: string;
  name: string;
  accept?: string;
  multiple?: boolean;
  currentFileUrl?: string; // Mevcut dosyayı göstermek için opsiyonel
}

export function FileInput({ 
  label, 
  name, 
  accept, 
  multiple = false, 
  currentFileUrl 
}: FileInputProps) {
  return (
    <FormRow label={label}> 
      {/* Mevcut Dosya Linki */}
      {currentFileUrl && ( 
        <div className="mb-2"> 
          <Link href={currentFileUrl} target="_blank" className="text-xs text-blue-600 hover:underline">
            Mevcut Dosya: {currentFileUrl.split('/').pop()}
          </Link> 
          {/* Resimse önizleme eklenebilir: <Image src={currentFileUrl} ... /> */}
        </div> 
      )} 
      {/* Dosya Seçme Input'u */}
      <input 
        type="file" 
        name={name} 
        accept={accept} 
        multiple={multiple} 
        className="block w-full text-sm text-gray-500 mt-1 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" 
      /> 
      {/* Uyarı Metni */}
      {currentFileUrl && (
        <p className="mt-1 text-xs text-gray-500">
          Yeni dosya yüklerseniz mevcut dosya değişir.
        </p>
      )} 
    </FormRow>
  );
}

// Bu dosyada sadece bu bileşen olduğu için default export da ekleyebiliriz (opsiyonel)
// export default FileInput;