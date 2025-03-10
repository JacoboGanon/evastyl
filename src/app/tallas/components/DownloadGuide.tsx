'use client';
import React from 'react';
import { Download } from 'lucide-react';

export default function DownloadGuide() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-3">¿Quieres llevar esta guía contigo?</h3>
      <p className="text-gray-600 mb-4 text-sm">
        Descarga nuestra guía de tallas en formato PDF para consultarla en cualquier momento, incluso sin conexión a internet.
      </p>
      
      <button
        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        onClick={() => {
          // En una implementación real, aquí se manejaría la descarga del PDF
          alert('En una implementación real, aquí se descargaría el PDF de la guía de tallas.');
          
          // Ejemplo de cómo podría funcionar la descarga:
          // 1. Generar el PDF con la información de las tablas
          // 2. Ofrecer la descarga al usuario
          
          // window.open('/ruta-al-pdf/guia-tallas-mexicanas.pdf', '_blank');
        }}
      >
        <Download className="w-4 h-4 mr-2" />
        Descargar Guía PDF
      </button>
      
      <p className="mt-4 text-xs text-gray-500">
        Formato PDF (2.3 MB) - Actualizado: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
} 