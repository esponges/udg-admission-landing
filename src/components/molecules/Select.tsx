"use client"
import React from 'react';
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

export function Select({ options, label, name, defaultValue, onChange }: SelectProps) {
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
        defaultValue={defaultValue}
        onChange={onChange}
        className={tw(
          `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
