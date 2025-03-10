'use client';
import React, { useState } from 'react';

type GenderType = 'mujer' | 'hombre';
type ClothingType = 'superior' | 'inferior' | 'calzado';

interface CalculatorResult {
  tallaMX: string;
  tallaInternacional: string;
  recomendacion?: string;
}

export default function TallaCalculator() {
  const [gender, setGender] = useState<GenderType>('mujer');
  const [clothingType, setClothingType] = useState<ClothingType>('superior');
  const [measurements, setMeasurements] = useState({
    busto: '',
    cintura: '',
    cadera: '',
    pie: '',
  });
  const [result, setResult] = useState<CalculatorResult | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };
  
  const calculateSize = () => {
    let tallaMX = '';
    let tallaInternacional = '';
    let recomendacion = '';
    
    // Lógica simplificada para calcular tallas
    if (gender === 'mujer') {
      if (clothingType === 'superior') {
        const busto = parseInt(measurements.busto);
        if (busto < 84) {
          tallaMX = 'XCH / 28';
          tallaInternacional = 'XS';
        } else if (busto >= 84 && busto < 87) {
          tallaMX = 'CH / 30';
          tallaInternacional = 'S';
        } else if (busto >= 87 && busto < 91) {
          tallaMX = 'M / 32';
          tallaInternacional = 'M';
        } else if (busto >= 91 && busto < 95) {
          tallaMX = 'G / 34';
          tallaInternacional = 'L';
        } else if (busto >= 95 && busto < 99) {
          tallaMX = 'XG / 36';
          tallaInternacional = 'XL';
        } else {
          tallaMX = 'XXG / 38';
          tallaInternacional = 'XXL';
        }
      } else if (clothingType === 'inferior') {
        const cintura = parseInt(measurements.cintura);
        const cadera = parseInt(measurements.cadera);
        
        if (cintura < 64) {
          tallaMX = '3 / 24';
          tallaInternacional = 'XS';
        } else if (cintura >= 64 && cintura < 67) {
          tallaMX = '5 / 26';
          tallaInternacional = 'S';
        } else if (cintura >= 67 && cintura < 71) {
          tallaMX = '7 / 28';
          tallaInternacional = 'M';
        } else if (cintura >= 71 && cintura < 75) {
          tallaMX = '9 / 30';
          tallaInternacional = 'L';
        } else if (cintura >= 75 && cintura < 79) {
          tallaMX = '11 / 32';
          tallaInternacional = 'XL';
        } else {
          tallaMX = '13 / 34';
          tallaInternacional = 'XXL';
        }
        
        // Recomendación basada en la relación cintura-cadera
        if (cadera - cintura > 30) {
          recomendacion = 'Considera modelos de corte curvy para mejor ajuste.';
        }
      } else if (clothingType === 'calzado') {
        const pie = parseFloat(measurements.pie);
        
        if (pie <= 22) {
          tallaMX = '22';
          tallaInternacional = '5 US / 35-36 EUR';
        } else if (pie > 22 && pie <= 23) {
          tallaMX = '23';
          tallaInternacional = '6 US / 36-37 EUR';
        } else if (pie > 23 && pie <= 24) {
          tallaMX = '24';
          tallaInternacional = '7 US / 37-38 EUR';
        } else if (pie > 24 && pie <= 25) {
          tallaMX = '25';
          tallaInternacional = '8 US / 38-39 EUR';
        } else if (pie > 25 && pie <= 26) {
          tallaMX = '26';
          tallaInternacional = '9 US / 39-40 EUR';
        } else {
          tallaMX = '27';
          tallaInternacional = '10 US / 40-41 EUR';
        }
      }
    } else if (gender === 'hombre') {
      if (clothingType === 'superior') {
        const pecho = parseInt(measurements.busto);
        
        if (pecho < 92) {
          tallaMX = 'XCH / 36';
          tallaInternacional = 'XS';
        } else if (pecho >= 92 && pecho < 98) {
          tallaMX = 'CH / 38';
          tallaInternacional = 'S';
        } else if (pecho >= 98 && pecho < 104) {
          tallaMX = 'M / 40';
          tallaInternacional = 'M';
        } else if (pecho >= 104 && pecho < 110) {
          tallaMX = 'G / 42';
          tallaInternacional = 'L';
        } else if (pecho >= 110 && pecho < 116) {
          tallaMX = 'XG / 44';
          tallaInternacional = 'XL';
        } else {
          tallaMX = 'XXG / 46';
          tallaInternacional = 'XXL';
        }
      } else if (clothingType === 'inferior') {
        const cintura = parseInt(measurements.cintura);
        
        if (cintura < 76) {
          tallaMX = '28';
          tallaInternacional = 'XS';
        } else if (cintura >= 76 && cintura < 81) {
          tallaMX = '30';
          tallaInternacional = 'S';
        } else if (cintura >= 81 && cintura < 86) {
          tallaMX = '32';
          tallaInternacional = 'M';
        } else if (cintura >= 86 && cintura < 91) {
          tallaMX = '34';
          tallaInternacional = 'L';
        } else if (cintura >= 91 && cintura < 96) {
          tallaMX = '36';
          tallaInternacional = 'XL';
        } else {
          tallaMX = '38';
          tallaInternacional = 'XXL';
        }
      } else if (clothingType === 'calzado') {
        const pie = parseFloat(measurements.pie);
        
        if (pie <= 25) {
          tallaMX = '25';
          tallaInternacional = '7 US / 40 EUR';
        } else if (pie > 25 && pie <= 26) {
          tallaMX = '26';
          tallaInternacional = '8 US / 41 EUR';
        } else if (pie > 26 && pie <= 27) {
          tallaMX = '27';
          tallaInternacional = '9 US / 42 EUR';
        } else if (pie > 27 && pie <= 28) {
          tallaMX = '28';
          tallaInternacional = '10 US / 43 EUR';
        } else if (pie > 28 && pie <= 29) {
          tallaMX = '29';
          tallaInternacional = '11 US / 44 EUR';
        } else {
          tallaMX = '30';
          tallaInternacional = '12 US / 45 EUR';
        }
      }
    }
    
    setResult({ tallaMX, tallaInternacional, recomendacion });
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Calculadora de Tallas</h2>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Ingresa tus medidas en centímetros para obtener una recomendación de talla.
      </p>
      
      <div className="space-y-6">
        {/* Selección de género */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Género</label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setGender('mujer')}
              className={`px-4 py-2 rounded-md ${
                gender === 'mujer' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Mujer
            </button>
            <button
              type="button"
              onClick={() => setGender('hombre')}
              className={`px-4 py-2 rounded-md ${
                gender === 'hombre' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Hombre
            </button>
          </div>
        </div>
        
        {/* Selección de tipo de prenda */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Prenda</label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setClothingType('superior')}
              className={`px-4 py-2 rounded-md ${
                clothingType === 'superior' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Ropa Superior
            </button>
            <button
              type="button"
              onClick={() => setClothingType('inferior')}
              className={`px-4 py-2 rounded-md ${
                clothingType === 'inferior' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Ropa Inferior
            </button>
            <button
              type="button"
              onClick={() => setClothingType('calzado')}
              className={`px-4 py-2 rounded-md ${
                clothingType === 'calzado' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Calzado
            </button>
          </div>
        </div>
        
        {/* Campos de medidas */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Medidas (cm)</label>
          
          {clothingType === 'superior' && (
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                {gender === 'mujer' ? 'Busto' : 'Pecho'}
              </label>
              <input
                type="number"
                name="busto"
                value={measurements.busto}
                onChange={handleInputChange}
                placeholder={`Medida de ${gender === 'mujer' ? 'busto' : 'pecho'} en cm`}
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}
          
          {clothingType === 'inferior' && (
            <>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Cintura</label>
                <input
                  type="number"
                  name="cintura"
                  value={measurements.cintura}
                  onChange={handleInputChange}
                  placeholder="Medida de cintura en cm"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              {gender === 'mujer' && (
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Cadera</label>
                  <input
                    type="number"
                    name="cadera"
                    value={measurements.cadera}
                    onChange={handleInputChange}
                    placeholder="Medida de cadera en cm"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              )}
            </>
          )}
          
          {clothingType === 'calzado' && (
            <div>
              <label className="block text-sm text-gray-600 mb-1">Longitud del pie</label>
              <input
                type="number"
                name="pie"
                value={measurements.pie}
                onChange={handleInputChange}
                placeholder="Longitud del pie en cm"
                className="w-full p-2 border rounded-md"
                step="0.5"
              />
            </div>
          )}
        </div>
        
        {/* Botón de cálculo */}
        <div>
          <button
            type="button"
            onClick={calculateSize}
            className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Calcular mi talla
          </button>
        </div>
        
        {/* Resultados */}
        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Tu talla recomendada:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Talla Mexicana</p>
                <p className="font-medium">{result.tallaMX}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Talla Internacional</p>
                <p className="font-medium">{result.tallaInternacional}</p>
              </div>
            </div>
            {result.recomendacion && (
              <p className="mt-4 text-sm text-gray-700 italic">{result.recomendacion}</p>
            )}
            <p className="mt-4 text-xs text-gray-500">
              Nota: Esta es una estimación basada en medidas estándar. Las tallas pueden variar según el fabricante.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 