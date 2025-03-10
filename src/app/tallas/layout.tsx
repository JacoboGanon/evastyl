import React from 'react';
import { metadata } from './metadata';

export { metadata };

export default function TallasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 