'use client';
import React from 'react';
import TallaTable from './TallaTable';

export default function UnisexTallas() {
  return (
    <div id="unisex" className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Tallas Unisex</h2>
      
      <div className="space-y-12">
        {/* Ropa Superior */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Ropa Superior</h3>
          
          <TallaTable 
            title="Camisetas y Playeras"
            description="Medidas en centímetros. Tallas estándar unisex."
            headers={["Talla MX", "Talla Internacional", "Pecho (cm)", "Largo (cm)"]}
            rows={[
              ["XCH", "XS", "84-89", "64-66"],
              ["CH", "S", "90-95", "67-69"],
              ["M", "M", "96-101", "70-72"],
              ["G", "L", "102-107", "73-75"],
              ["XG", "XL", "108-113", "76-78"],
              ["XXG", "XXL", "114-119", "79-81"]
            ]}
          />
          
          <TallaTable 
            title="Sudaderas y Hoodies"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Pecho (cm)", "Largo (cm)", "Largo de Manga (cm)"]}
            rows={[
              ["XCH", "XS", "84-89", "64-66", "59-60"],
              ["CH", "S", "90-95", "67-69", "61-62"],
              ["M", "M", "96-101", "70-72", "63-64"],
              ["G", "L", "102-107", "73-75", "65-66"],
              ["XG", "XL", "108-113", "76-78", "67-68"],
              ["XXG", "XXL", "114-119", "79-81", "69-70"]
            ]}
          />
        </section>
        
        {/* Ropa Deportiva */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Ropa Deportiva</h3>
          
          <TallaTable 
            title="Camisetas Deportivas"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Pecho (cm)", "Largo (cm)"]}
            rows={[
              ["XCH", "XS", "84-89", "64-66"],
              ["CH", "S", "90-95", "67-69"],
              ["M", "M", "96-101", "70-72"],
              ["G", "L", "102-107", "73-75"],
              ["XG", "XL", "108-113", "76-78"],
              ["XXG", "XXL", "114-119", "79-81"]
            ]}
          />
          
          <TallaTable 
            title="Pants y Shorts Deportivos"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Cintura (cm)", "Cadera (cm)", "Largo (cm)"]}
            rows={[
              ["XCH", "XS", "66-71", "86-91", "98-100"],
              ["CH", "S", "72-77", "92-97", "101-103"],
              ["M", "M", "78-83", "98-103", "104-106"],
              ["G", "L", "84-89", "104-109", "107-109"],
              ["XG", "XL", "90-95", "110-115", "110-112"],
              ["XXG", "XXL", "96-101", "116-121", "113-115"]
            ]}
          />
        </section>
        
        {/* Calzado */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Calzado</h3>
          
          <TallaTable 
            title="Tenis y Calzado Deportivo"
            description="Conversión entre sistemas de tallas. Para convertir de talla de mujer a hombre, generalmente se resta 1.5 a la talla de mujer."
            headers={["Talla MX Hombre", "Talla MX Mujer", "Talla US Hombre", "Talla US Mujer", "Talla EUR", "Longitud (cm)"]}
            rows={[
              ["24", "22.5", "6", "5.5", "38-39", "24"],
              ["25", "23.5", "7", "6.5", "39-40", "25"],
              ["26", "24.5", "8", "7.5", "40-41", "26"],
              ["27", "25.5", "9", "8.5", "41-42", "27"],
              ["28", "26.5", "10", "9.5", "42-43", "28"],
              ["29", "27.5", "11", "10.5", "43-44", "29"],
              ["30", "28.5", "12", "11.5", "44-45", "30"]
            ]}
          />
        </section>
        
        {/* Accesorios */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Accesorios</h3>
          
          <TallaTable 
            title="Gorras y Sombreros"
            description="Medida de la circunferencia de la cabeza en centímetros."
            headers={["Talla", "Circunferencia (cm)"]}
            rows={[
              ["XS", "53-54"],
              ["S", "55-56"],
              ["M", "57-58"],
              ["L", "59-60"],
              ["XL", "61-62"],
              ["XXL", "63-64"]
            ]}
          />
          
          <TallaTable 
            title="Guantes"
            description="Medida de la circunferencia de la mano en centímetros."
            headers={["Talla", "Circunferencia (cm)"]}
            rows={[
              ["XS", "15-16"],
              ["S", "17-18"],
              ["M", "19-20"],
              ["L", "21-22"],
              ["XL", "23-24"],
              ["XXL", "25-26"]
            ]}
          />
          
          <TallaTable 
            title="Bufandas"
            description="Medidas estándar en centímetros."
            headers={["Tipo", "Ancho (cm)", "Largo (cm)"]}
            rows={[
              ["Delgada", "15-20", "120-140"],
              ["Estándar", "25-30", "150-180"],
              ["Ancha", "35-40", "180-200"]
            ]}
          />
          
          <TallaTable 
            title="Mochilas y Bolsos"
            description="Capacidad en litros y dimensiones aproximadas."
            headers={["Tamaño", "Capacidad (L)", "Dimensiones Aprox. (cm)"]}
            rows={[
              ["Pequeño", "10-20", "30x20x15"],
              ["Mediano", "21-30", "40x30x20"],
              ["Grande", "31-40", "50x35x25"],
              ["Extra Grande", "41+", "60x40x30"]
            ]}
          />
        </section>
        
        {/* Conversión entre Sistemas */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Conversión entre Sistemas de Tallas</h3>
          
          <TallaTable 
            title="Equivalencias Generales"
            description="Conversión entre sistemas de tallas internacionales."
            headers={["Talla MX", "Talla US", "Talla EUR", "Talla UK", "Talla Internacional"]}
            rows={[
              ["XCH", "XS", "XS", "XS", "XS"],
              ["CH", "S", "S", "S", "S"],
              ["M", "M", "M", "M", "M"],
              ["G", "L", "L", "L", "L"],
              ["XG", "XL", "XL", "XL", "XL"],
              ["XXG", "XXL", "XXL", "XXL", "XXL"]
            ]}
          />
          
          <TallaTable 
            title="Conversión Numérica"
            description="Equivalencias numéricas entre sistemas de tallas."
            headers={["Talla MX (Mujer)", "Talla MX (Hombre)", "Talla US (Mujer)", "Talla US (Hombre)", "Talla EUR"]}
            rows={[
              ["3", "28", "0-2", "28", "32-34"],
              ["5", "30", "4-6", "30", "36-38"],
              ["7", "32", "8-10", "32", "40-42"],
              ["9", "34", "12-14", "34", "44-46"],
              ["11", "36", "16-18", "36", "48-50"],
              ["13", "38", "20-22", "38", "52-54"]
            ]}
          />
        </section>
        
        {/* Cómo Medir */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Cómo Tomar Medidas</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">Consejos para tomar medidas correctamente:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Usa una cinta métrica flexible.</li>
              <li>Mantén la cinta ajustada pero no apretada.</li>
              <li>Para mayor precisión, pide ayuda a otra persona.</li>
              <li>Toma las medidas directamente sobre el cuerpo, con ropa ligera.</li>
              <li>Mantén una postura natural al medir.</li>
            </ul>
            
            <h4 className="font-semibold mt-6 mb-3">Puntos de medición principales:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Pecho/Busto:</strong> La parte más ancha del pecho, pasando por debajo de las axilas y alrededor de la espalda.</li>
              <li><strong>Cintura:</strong> La parte más estrecha del torso, generalmente a la altura del ombligo.</li>
              <li><strong>Cadera:</strong> La parte más ancha de las caderas, aproximadamente 20 cm por debajo de la cintura.</li>
              <li><strong>Largo de manga:</strong> Desde el hombro hasta la muñeca con el brazo ligeramente doblado.</li>
              <li><strong>Largo de pierna:</strong> Desde la cintura hasta el tobillo por el lado exterior de la pierna.</li>
              <li><strong>Cuello:</strong> Alrededor de la base del cuello, donde normalmente se sitúa el cuello de una camisa.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 