'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Tab = {
  label: string;
  value: string;
  href: string;
};

interface TallasNavigationProps {
  activeTab: string;
  onChange: (value: string) => void;
}

export default function TallasNavigation({ activeTab, onChange }: TallasNavigationProps) {
  const tabs: Tab[] = [
    { label: 'Mujer', value: 'mujer', href: '#mujer' },
    { label: 'Hombre', value: 'hombre', href: '#hombre' },
    { label: 'Unisex', value: 'unisex', href: '#unisex' },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex p-1 bg-gray-100 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.value
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
} 