'use client';
import React from 'react';
import TallaTable from './TallaTable';

export default function MujerTallas() {
  return (
    <div id="mujer" className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Tallas para Mujer</h2>
      
      <div className="space-y-12">
        {/* Ropa Superior */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Ropa Superior</h3>
          
          <TallaTable 
            title="Blusas, Camisas y Tops"
            description="Medidas en centímetros. Para encontrar tu talla, mide tu busto, cintura y cadera."
            headers={["Talla MX", "Talla Internacional", "Busto (cm)", "Cintura (cm)", "Cadera (cm)"]}
            rows={[
              ["XCH / 28", "XS", "81-83", "61-63", "86-89"],
              ["CH / 30", "S", "84-86", "64-66", "90-92"],
              ["M / 32", "M", "87-90", "67-70", "93-96"],
              ["G / 34", "L", "91-94", "71-74", "97-100"],
              ["XG / 36", "XL", "95-98", "75-78", "101-104"],
              ["XXG / 38", "XXL", "99-102", "79-82", "105-108"]
            ]}
          />
          
          <TallaTable 
            title="Vestidos"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Busto (cm)", "Cintura (cm)", "Cadera (cm)"]}
            rows={[
              ["3", "XS", "80-82", "60-62", "86-88"],
              ["5", "S", "83-85", "63-65", "89-91"],
              ["7", "M", "86-89", "66-69", "92-95"],
              ["9", "L", "90-93", "70-73", "96-99"],
              ["11", "XL", "94-97", "74-77", "100-103"],
              ["13", "XXL", "98-101", "78-81", "104-107"]
            ]}
          />
          
          <TallaTable 
            title="Suéteres y Chamarras"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Busto (cm)", "Largo de Manga (cm)"]}
            rows={[
              ["XCH", "XS", "82-84", "58-59"],
              ["CH", "S", "85-87", "59-60"],
              ["M", "M", "88-91", "60-61"],
              ["G", "L", "92-95", "61-62"],
              ["XG", "XL", "96-99", "62-63"],
              ["XXG", "XXL", "100-103", "63-64"]
            ]}
          />
        </section>
        
        {/* Ropa Inferior */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Ropa Inferior</h3>
          
          <TallaTable 
            title="Pantalones y Jeans"
            description="Medidas en centímetros. La talla mexicana suele corresponder a la medida de cintura en pulgadas."
            headers={["Talla MX", "Talla Internacional", "Cintura (cm)", "Cadera (cm)", "Largo (cm)"]}
            rows={[
              ["3 / 24", "XS", "60-62", "86-88", "100-102"],
              ["5 / 26", "S", "63-65", "89-91", "102-104"],
              ["7 / 28", "M", "66-69", "92-95", "104-106"],
              ["9 / 30", "L", "70-73", "96-99", "106-108"],
              ["11 / 32", "XL", "74-77", "100-103", "108-110"],
              ["13 / 34", "XXL", "78-81", "104-107", "110-112"]
            ]}
          />
          
          <TallaTable 
            title="Faldas"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Cintura (cm)", "Cadera (cm)"]}
            rows={[
              ["3", "XS", "60-62", "86-88"],
              ["5", "S", "63-65", "89-91"],
              ["7", "M", "66-69", "92-95"],
              ["9", "L", "70-73", "96-99"],
              ["11", "XL", "74-77", "100-103"],
              ["13", "XXL", "78-81", "104-107"]
            ]}
          />
          
          <TallaTable 
            title="Shorts"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Cintura (cm)", "Cadera (cm)"]}
            rows={[
              ["3", "XS", "60-62", "86-88"],
              ["5", "S", "63-65", "89-91"],
              ["7", "M", "66-69", "92-95"],
              ["9", "L", "70-73", "96-99"],
              ["11", "XL", "74-77", "100-103"],
              ["13", "XXL", "78-81", "104-107"]
            ]}
          />
        </section>
        
        {/* Calzado */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Calzado</h3>
          
          <TallaTable 
            title="Zapatos y Zapatillas"
            description="Conversión entre sistemas de tallas."
            headers={["Talla MX", "Talla US", "Talla EUR", "Longitud (cm)"]}
            rows={[
              ["22", "5", "35-36", "21.5"],
              ["22.5", "5.5", "36", "22"],
              ["23", "6", "36-37", "22.5"],
              ["23.5", "6.5", "37", "23"],
              ["24", "7", "37-38", "23.5"],
              ["24.5", "7.5", "38", "24"],
              ["25", "8", "38-39", "24.5"],
              ["25.5", "8.5", "39", "25"],
              ["26", "9", "39-40", "25.5"],
              ["26.5", "9.5", "40", "26"],
              ["27", "10", "40-41", "26.5"]
            ]}
          />
          
          <TallaTable 
            title="Botas"
            description="Conversión entre sistemas de tallas."
            headers={["Talla MX", "Talla US", "Talla EUR", "Longitud (cm)"]}
            rows={[
              ["22", "5", "35-36", "21.5"],
              ["22.5", "5.5", "36", "22"],
              ["23", "6", "36-37", "22.5"],
              ["23.5", "6.5", "37", "23"],
              ["24", "7", "37-38", "23.5"],
              ["24.5", "7.5", "38", "24"],
              ["25", "8", "38-39", "24.5"],
              ["25.5", "8.5", "39", "25"],
              ["26", "9", "39-40", "25.5"],
              ["26.5", "9.5", "40", "26"],
              ["27", "10", "40-41", "26.5"]
            ]}
          />
        </section>
        
        {/* Ropa Interior */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Ropa Interior</h3>
          
          <TallaTable 
            title="Sostenes (Bras)"
            description="La talla se compone de la medida de la banda (número) y la copa (letra)."
            headers={["Talla de Banda (cm)", "Copa A (cm)", "Copa B (cm)", "Copa C (cm)", "Copa D (cm)"]}
            rows={[
              ["70", "80-82", "82-84", "84-86", "86-88"],
              ["75", "85-87", "87-89", "89-91", "91-93"],
              ["80", "90-92", "92-94", "94-96", "96-98"],
              ["85", "95-97", "97-99", "99-101", "101-103"],
              ["90", "100-102", "102-104", "104-106", "106-108"],
              ["95", "105-107", "107-109", "109-111", "111-113"]
            ]}
          />
          
          <TallaTable 
            title="Panties"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Cintura (cm)", "Cadera (cm)"]}
            rows={[
              ["XCH", "XS", "60-64", "86-90"],
              ["CH", "S", "65-69", "91-95"],
              ["M", "M", "70-74", "96-100"],
              ["G", "L", "75-79", "101-105"],
              ["XG", "XL", "80-84", "106-110"],
              ["XXG", "XXL", "85-89", "111-115"]
            ]}
          />
        </section>
        
        {/* Accesorios */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Accesorios</h3>
          
          <TallaTable 
            title="Guantes"
            description="Medida de la circunferencia de la mano en centímetros."
            headers={["Talla", "Circunferencia (cm)"]}
            rows={[
              ["XS", "15-16"],
              ["S", "17-18"],
              ["M", "19-20"],
              ["L", "21-22"],
              ["XL", "23-24"]
            ]}
          />
          
          <TallaTable 
            title="Sombreros y Gorras"
            description="Medida de la circunferencia de la cabeza en centímetros."
            headers={["Talla", "Circunferencia (cm)"]}
            rows={[
              ["XS", "53-54"],
              ["S", "55-56"],
              ["M", "57-58"],
              ["L", "59-60"],
              ["XL", "61-62"]
            ]}
          />
          
          <TallaTable 
            title="Cinturones"
            description="Medida en centímetros, correspondiente a la circunferencia de la cintura."
            headers={["Talla", "Cintura (cm)"]}
            rows={[
              ["XS", "60-65"],
              ["S", "66-71"],
              ["M", "72-77"],
              ["L", "78-83"],
              ["XL", "84-89"],
              ["XXL", "90-95"]
            ]}
          />
        </section>
      </div>
    </div>
  );
} 