"use client"
import { useState } from 'react';
import { twMerge as tw } from 'tailwind-merge';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  label: string;
  name: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({ options, label, name, onChange }: SelectProps) {
  const [selected, setSelected] = useState<string>('');

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    if (onChange) onChange(e);
  }

  return (
    <div className={tw(`flex flex-col w-full`)}>
      <label
        htmlFor={name}
        className={tw(`text-sm font-medium text-gray-700 my-5`)}
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        onChange={handleOptionChange}
        value={selected}
        className={tw(
          `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
        )}
      >
        <option value="" disabled>{'Elige una opción...'}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
