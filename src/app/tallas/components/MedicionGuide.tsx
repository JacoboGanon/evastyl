'use client';
import React from 'react';
import Image from 'next/image';

export default function MedicionGuide() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Guía de Medición</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Cómo tomar medidas correctamente</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-sm font-semibold">1</span>
              </div>
              <div>
                <p className="font-medium">Usa una cinta métrica flexible</p>
                <p className="text-sm text-gray-600">Una cinta de costura es ideal para tomar medidas corporales.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-sm font-semibold">2</span>
              </div>
              <div>
                <p className="font-medium">Mantén una postura natural</p>
                <p className="text-sm text-gray-600">Párate derecho pero relajado, sin tensar músculos.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-sm font-semibold">3</span>
              </div>
              <div>
                <p className="font-medium">Usa ropa ligera</p>
                <p className="text-sm text-gray-600">Toma las medidas con ropa interior o prendas ajustadas.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-sm font-semibold">4</span>
              </div>
              <div>
                <p className="font-medium">Mantén la cinta ajustada pero no apretada</p>
                <p className="text-sm text-gray-600">La cinta debe estar firme pero sin comprimir la piel.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-sm font-semibold">5</span>
              </div>
              <div>
                <p className="font-medium">Pide ayuda</p>
                <p className="text-sm text-gray-600">Para mayor precisión, especialmente en medidas como el busto o espalda.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Puntos de medición principales</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium mb-1">Busto / Pecho</h4>
              <p className="text-sm text-gray-600">Mide alrededor de la parte más ancha del pecho, pasando por debajo de las axilas y alrededor de la espalda.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium mb-1">Cintura</h4>
              <p className="text-sm text-gray-600">Mide alrededor de la parte más estrecha de la cintura, generalmente a la altura del ombligo.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium mb-1">Cadera</h4>
              <p className="text-sm text-gray-600">Mide alrededor de la parte más ancha de las caderas, aproximadamente 20 cm por debajo de la cintura.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium mb-1">Largo de manga</h4>
              <p className="text-sm text-gray-600">Mide desde el hombro hasta la muñeca con el brazo ligeramente doblado.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium mb-1">Largo de pierna (Entrepierna)</h4>
              <p className="text-sm text-gray-600">Mide desde la entrepierna hasta el tobillo por el lado interior de la pierna.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 