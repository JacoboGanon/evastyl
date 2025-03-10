'use client';
import React from 'react';
import TallasNavigation from './components/TallasNavigation';
import MujerTallas from './components/MujerTallas';
import HombreTallas from './components/HombreTallas';
import UnisexTallas from './components/UnisexTallas';
import TallaSearch from './components/TallaSearch';
import MedicionGuide from './components/MedicionGuide';
import TallasFAQ from './components/TallasFAQ';
import TallaCalculator from './components/TallaCalculator';
import DownloadGuide from './components/DownloadGuide';

export default function TallasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Guía de Tallas Mexicanas</h1>
      <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
        Guía completa de tallas mexicanas para ropa, calzado y accesorios, 
        dividida por categorías de mujer, hombre y unisex.
      </p>
      
      {/* Buscador de tallas */}
      <TallaSearch onSearch={(query) => {
        // En una implementación real, aquí se manejaría la búsqueda
        console.log('Búsqueda:', query);
        
        // Ejemplo de cómo podría funcionar la búsqueda:
        // 1. Filtrar las tablas que contienen el término de búsqueda
        // 2. Hacer scroll hasta la primera coincidencia
        // 3. Resaltar las coincidencias
        
        if (query) {
          // Buscar el elemento que contiene el texto
          const elements = document.querySelectorAll('*');
          for (const element of elements) {
            if (element.textContent?.toLowerCase().includes(query.toLowerCase())) {
              // Hacer scroll hasta el elemento
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              break;
            }
          }
        }
      }} />
      
      {/* Calculadora de tallas */}
      <div className="mb-12" id="calculadora">
        <h2 className="text-2xl font-bold text-center mb-6">Calculadora de Tallas</h2>
        <TallaCalculator />
      </div>
      
      {/* Instrucciones de uso */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-3">Cómo usar esta guía</h2>
        <p className="mb-4">
          Esta guía de tallas mexicanas te ayudará a encontrar la talla correcta para diferentes tipos de prendas y accesorios.
          Navega entre las diferentes categorías utilizando las pestañas de navegación.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Selecciona entre <strong>Mujer</strong>, <strong>Hombre</strong> o <strong>Unisex</strong> según el tipo de prenda que buscas.</li>
          <li>Dentro de cada categoría encontrarás tablas específicas para diferentes tipos de prendas.</li>
          <li>Las medidas están expresadas principalmente en centímetros.</li>
          <li>Se incluyen equivalencias entre tallas mexicanas e internacionales.</li>
          <li>Usa el buscador para encontrar rápidamente información sobre una prenda o talla específica.</li>
          <li>Utiliza la calculadora de tallas para obtener una recomendación personalizada.</li>
        </ul>
      </div>
      
      {/* Guía de medición */}
      <MedicionGuide />
      
      {/* Navegación por pestañas */}
      <div className="mb-8">
        <nav className="flex justify-center mb-8" aria-label="Tabs">
          <a href="#mujer" className="px-5 py-2 text-sm font-medium rounded-md mx-1 bg-gray-100 hover:bg-gray-200">
            Mujer
          </a>
          <a href="#hombre" className="px-5 py-2 text-sm font-medium rounded-md mx-1 bg-gray-100 hover:bg-gray-200">
            Hombre
          </a>
          <a href="#unisex" className="px-5 py-2 text-sm font-medium rounded-md mx-1 bg-gray-100 hover:bg-gray-200">
            Unisex
          </a>
        </nav>
      </div>
      
      {/* Contenido de las tallas */}
      <div className="space-y-16">
        <MujerTallas />
        <HombreTallas />
        <UnisexTallas />
      </div>
      
      {/* Descarga de la guía */}
      <div className="my-16">
        <DownloadGuide />
      </div>
      
      {/* Preguntas frecuentes */}
      <div className="mt-16" id="faq">
        <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <TallasFAQ />
      </div>
      
      {/* Nota al pie */}
      <div className="mt-16 pt-8 border-t text-center text-gray-500 text-sm">
        <p>
          Nota: Las tallas pueden variar ligeramente entre diferentes marcas y fabricantes. 
          Esta guía proporciona medidas estándar para el mercado mexicano.
        </p>
        <p className="mt-2">
          Recomendamos siempre consultar la guía de tallas específica de cada marca cuando esté disponible.
        </p>
      </div>
    </div>
  );
} 