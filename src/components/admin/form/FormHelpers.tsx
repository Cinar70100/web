import React from 'react';

// FormRow (No change needed here)
export function FormRow({
  label,
  helperText,
  children,
}: {
  label: string;
  helperText?: string;
  children: React.ReactNode;
}) {
  return (
    <div> 
      <label className="block text-sm font-medium text-gray-800">{label}</label>
      <div className="mt-1">{children}</div>
      {helperText && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  );
}

// FormRowSelect (No change needed here)
export function FormRowSelect({
  label,
  name,
  defaultValue, 
  children,
}: {
  label: string;
  name: string;
  defaultValue?: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="py-2"> 
      <label className="block text-sm font-medium text-gray-800">{label}</label>
      <div className="mt-1">
        <select
          name={name}
          defaultValue={defaultValue}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          {children}
        </select>
      </div>
    </div>
  );
}

// FormRowInput (CORRECTION: Added maxLength prop)
export function FormRowInput({
  label,
  name,
  defaultValue,
  type = "text",
  placeholder = "",
  maxLength, // <-- **ADD THIS LINE**
}: {
  label: string;
  name: string;
  defaultValue?: string; 
  type?: string;
  placeholder?: string;
  maxLength?: number; // <-- **ADD THIS LINE** (Make its type optional number)
}) {
  return (
    <div className="py-2">
      <label className="block text-sm font-medium text-gray-800">{label}</label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          maxLength={maxLength} // <-- **ADD THIS LINE** (Use the prop)
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
}


// FormRowInputWithIcon (No change needed here)
export function FormRowInputWithIcon({
  label,
  name,
  type = "text",
  placeholder = "",
  icon, 
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="py-2"> 
      <label className="block text-sm font-medium text-gray-800">{label}</label>
      <div className="relative mt-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500">
            {icon}
          </span>
        </div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-10"
        />
      </div>
    </div>
  );
}