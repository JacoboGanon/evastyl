'use client';
import React from 'react';
import TallaTable from './TallaTable';

export default function HombreTallas() {
  return (
    <div id="hombre" className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Tallas para Hombre</h2>
      
      <div className="space-y-12">
        {/* Ropa Superior */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Ropa Superior</h3>
          
          <TallaTable 
            title="Camisas y Playeras"
            description="Medidas en centímetros. Para encontrar tu talla, mide tu pecho y cintura."
            headers={["Talla MX", "Talla Internacional", "Cuello (cm)", "Pecho (cm)", "Cintura (cm)"]}
            rows={[
              ["XCH / 36", "XS", "36-37", "86-91", "71-76"],
              ["CH / 38", "S", "38-39", "92-97", "77-82"],
              ["M / 40", "M", "40-41", "98-103", "83-88"],
              ["G / 42", "L", "42-43", "104-109", "89-94"],
              ["XG / 44", "XL", "44-45", "110-115", "95-100"],
              ["XXG / 46", "XXL", "46-47", "116-121", "101-106"]
            ]}
          />
          
          <TallaTable 
            title="Suéteres y Sudaderas"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Pecho (cm)", "Largo de Manga (cm)"]}
            rows={[
              ["XCH", "XS", "86-91", "61-62"],
              ["CH", "S", "92-97", "63-64"],
              ["M", "M", "98-103", "65-66"],
              ["G", "L", "104-109", "67-68"],
              ["XG", "XL", "110-115", "69-70"],
              ["XXG", "XXL", "116-121", "71-72"]
            ]}
          />
          
          <TallaTable 
            title="Chamarras y Abrigos"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Pecho (cm)", "Cintura (cm)", "Largo de Manga (cm)"]}
            rows={[
              ["XCH / 36", "XS", "86-91", "71-76", "61-62"],
              ["CH / 38", "S", "92-97", "77-82", "63-64"],
              ["M / 40", "M", "98-103", "83-88", "65-66"],
              ["G / 42", "L", "104-109", "89-94", "67-68"],
              ["XG / 44", "XL", "110-115", "95-100", "69-70"],
              ["XXG / 46", "XXL", "116-121", "101-106", "71-72"]
            ]}
          />
        </section>
        
        {/* Ropa Inferior */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Ropa Inferior</h3>
          
          <TallaTable 
            title="Pantalones y Jeans"
            description="La talla mexicana suele corresponder a la medida de cintura en pulgadas."
            headers={["Talla MX", "Talla Internacional", "Cintura (cm)", "Cintura (pulg)", "Cadera (cm)", "Largo (cm)"]}
            rows={[
              ["28", "XS", "71-73", "28", "86-88", "102-104"],
              ["30", "S", "76-78", "30", "91-93", "104-106"],
              ["32", "M", "81-83", "32", "96-98", "106-108"],
              ["34", "L", "86-88", "34", "101-103", "108-110"],
              ["36", "XL", "91-93", "36", "106-108", "110-112"],
              ["38", "XXL", "96-98", "38", "111-113", "112-114"]
            ]}
          />
          
          <TallaTable 
            title="Shorts y Bermudas"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Cintura (cm)", "Cintura (pulg)", "Cadera (cm)"]}
            rows={[
              ["28", "XS", "71-73", "28", "86-88"],
              ["30", "S", "76-78", "30", "91-93"],
              ["32", "M", "81-83", "32", "96-98"],
              ["34", "L", "86-88", "34", "101-103"],
              ["36", "XL", "91-93", "36", "106-108"],
              ["38", "XXL", "96-98", "38", "111-113"]
            ]}
          />
          
          <TallaTable 
            title="Trajes (Sacos)"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Pecho (cm)", "Cintura (cm)"]}
            rows={[
              ["44", "XS", "86-88", "71-73"],
              ["46", "S", "89-91", "74-76"],
              ["48", "M", "92-94", "77-79"],
              ["50", "L", "95-97", "80-82"],
              ["52", "XL", "98-100", "83-85"],
              ["54", "XXL", "101-103", "86-88"]
            ]}
          />
        </section>
        
        {/* Calzado */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Calzado</h3>
          
          <TallaTable 
            title="Zapatos y Tenis"
            description="Conversión entre sistemas de tallas."
            headers={["Talla MX", "Talla US", "Talla EUR", "Longitud (cm)"]}
            rows={[
              ["24", "6", "39", "24"],
              ["24.5", "6.5", "39.5", "24.5"],
              ["25", "7", "40", "25"],
              ["25.5", "7.5", "40.5", "25.5"],
              ["26", "8", "41", "26"],
              ["26.5", "8.5", "41.5", "26.5"],
              ["27", "9", "42", "27"],
              ["27.5", "9.5", "42.5", "27.5"],
              ["28", "10", "43", "28"],
              ["28.5", "10.5", "43.5", "28.5"],
              ["29", "11", "44", "29"],
              ["29.5", "11.5", "44.5", "29.5"],
              ["30", "12", "45", "30"]
            ]}
          />
          
          <TallaTable 
            title="Botas"
            description="Conversión entre sistemas de tallas."
            headers={["Talla MX", "Talla US", "Talla EUR", "Longitud (cm)"]}
            rows={[
              ["24", "6", "39", "24"],
              ["25", "7", "40", "25"],
              ["26", "8", "41", "26"],
              ["27", "9", "42", "27"],
              ["28", "10", "43", "28"],
              ["29", "11", "44", "29"],
              ["30", "12", "45", "30"]
            ]}
          />
        </section>
        
        {/* Ropa Interior */}
        <section>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Ropa Interior</h3>
          
          <TallaTable 
            title="Calzoncillos y Bóxers"
            description="Medidas en centímetros."
            headers={["Talla MX", "Talla Internacional", "Cintura (cm)"]}
            rows={[
              ["XCH", "XS", "71-76"],
              ["CH", "S", "77-82"],
              ["M", "M", "83-88"],
              ["G", "L", "89-94"],
              ["XG", "XL", "95-100"],
              ["XXG", "XXL", "101-106"]
            ]}
          />
          
          <TallaTable 
            title="Calcetines"
            description="Correspondencia con talla de calzado."
            headers={["Talla", "Talla de Calzado MX"]}
            rows={[
              ["S", "24-25"],
              ["M", "26-27"],
              ["L", "28-29"],
              ["XL", "30-31"]
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
              ["S", "19-20"],
              ["M", "21-22"],
              ["L", "23-24"],
              ["XL", "25-26"]
            ]}
          />
          
          <TallaTable 
            title="Sombreros y Gorras"
            description="Medida de la circunferencia de la cabeza en centímetros."
            headers={["Talla", "Circunferencia (cm)"]}
            rows={[
              ["S", "55-56"],
              ["M", "57-58"],
              ["L", "59-60"],
              ["XL", "61-62"]
            ]}
          />
          
          <TallaTable 
            title="Cinturones"
            description="La talla corresponde a la medida de cintura en pulgadas."
            headers={["Talla", "Cintura (cm)", "Cintura (pulg)"]}
            rows={[
              ["28", "71-73", "28"],
              ["30", "76-78", "30"],
              ["32", "81-83", "32"],
              ["34", "86-88", "34"],
              ["36", "91-93", "36"],
              ["38", "96-98", "38"],
              ["40", "101-103", "40"],
              ["42", "106-108", "42"]
            ]}
          />
          
          <TallaTable 
            title="Corbatas"
            description="Medidas estándar en centímetros."
            headers={["Tipo", "Ancho (cm)", "Largo (cm)"]}
            rows={[
              ["Delgada", "5-6", "140-150"],
              ["Estándar", "7-9", "140-150"],
              ["Ancha", "10-12", "140-150"]
            ]}
          />
        </section>
      </div>
    </div>
  );
} 