'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function TallasFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs: FAQItem[] = [
    {
      question: "¿Cómo sé cuál es mi talla mexicana?",
      answer: "Para determinar tu talla mexicana, lo mejor es tomar tus medidas corporales (busto/pecho, cintura, cadera) y compararlas con las tablas de esta guía. Las tallas pueden variar según el tipo de prenda y el fabricante."
    },
    {
      question: "¿Las tallas mexicanas son diferentes a las internacionales?",
      answer: "Sí, las tallas mexicanas tienen su propio sistema, aunque suelen tener equivalencias con sistemas internacionales. Por ejemplo, una talla CH mexicana generalmente equivale a una S (Small) internacional."
    },
    {
      question: "¿Cómo convierto mi talla de EE.UU. a talla mexicana?",
      answer: "Puedes usar las tablas de conversión en la sección 'Unisex' bajo 'Conversión entre Sistemas de Tallas'. En general, las tallas mexicanas XCH, CH, M, G, XG equivalen aproximadamente a XS, S, M, L, XL en EE.UU."
    },
    {
      question: "¿Las tallas de calzado mexicanas son iguales a las americanas?",
      answer: "No, las tallas de calzado mexicanas son diferentes. Por ejemplo, una talla 7 US de hombre equivale aproximadamente a una talla 25 mexicana. Consulta las tablas específicas de calzado en esta guía para conversiones precisas."
    },
    {
      question: "¿Qué hago si estoy entre dos tallas?",
      answer: "Si estás entre dos tallas, generalmente es recomendable elegir la talla mayor para mayor comodidad. Sin embargo, esto puede variar según el tipo de prenda y el ajuste deseado. Para prendas ajustadas como jeans, considera el material y su elasticidad."
    },
    {
      question: "¿Las tallas de niños siguen el mismo sistema?",
      answer: "Las tallas infantiles en México suelen basarse en la edad y/o estatura del niño. Por ejemplo, tallas como 2, 4, 6, 8, etc., que corresponden aproximadamente a la edad en años. Para bebés, se usan tallas como 3M, 6M, 12M, etc., que corresponden a meses."
    },
    {
      question: "¿Cómo mido mi talla de sostén correctamente?",
      answer: "Para medir tu talla de sostén, necesitas dos medidas: la banda (contorno bajo el busto) y la copa (diferencia entre esta medida y el contorno del busto). La banda se expresa en centímetros (ej. 75, 80, 85) y la copa en letras (A, B, C, etc.)."
    },
    {
      question: "¿Las tallas de pantalón para hombre en México usan pulgadas?",
      answer: "Sí, las tallas de pantalón para hombre en México suelen expresarse en pulgadas para la cintura (ej. 30, 32, 34), similar al sistema estadounidense. Sin embargo, algunas marcas pueden usar las denominaciones CH, M, G, etc."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="max-w-3xl mx-auto mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Preguntas Frecuentes</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 