'use client';
import React from 'react';

interface TallaTableProps {
  title: string;
  headers: string[];
  rows: string[][];
  description?: string;
}

export default function TallaTable({ title, headers, rows, description }: TallaTableProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4 text-sm">{description}</p>}
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              {headers.map((header, index) => (
                <th 
                  key={index} 
                  className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className="py-3 px-4 text-sm text-gray-900 border-b"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 