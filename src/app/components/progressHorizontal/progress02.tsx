'use client';

import React, { useState } from 'react';
import './progress02.css';

const trackingSteps = [
  { description: "Passo 01", time: "15 out, 1:43 (BRT)", status: "active", tooltipText: "A defesa do réu é um direito fundamental garantido pela Constituição, assegurando que todos tenham acesso a um julgamento justo." },
  { description: "Passo 02", time: "15 out, 1:14 (BRT)", status: "pending", tooltipText: "O juiz deve analisar cuidadosamente as provas apresentadas para tomar uma decisão imparcial, respeitando os princípios da justiça." },
  { description: "Passo 03", time: "14 out, 17:28 (BRT)", status: "pending", tooltipText: "O prazo para a apresentação de recursos é um aspecto crucial do processo, garantindo que as partes possam contestar decisões que considerem injustas." },
  { description: "Passo 04", time: "14 out, 14:10 (BRT)", status: "pending", tooltipText: "A mediação e a conciliação são métodos alternativos de resolução de conflitos que visam evitar o prolongamento de processos judiciais." },
  { description: "Passo 05", time: "14 out, 11:50 (BRT)", status: "pending", tooltipText: "A sentença proferida pelo juiz deve ser devidamente fundamentada, permitindo que as partes compreendam as razões da decisão e possam exercer seu direito de recurso." }
];

const ProgressHorizontal = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="tracking-custom-container">
      <div className="tracking-custom-header">Status do Processo</div>

      {trackingSteps.map((step, index) => (
        <div
          key={index}
          className={`tracking-custom-step ${step.status}`}
          onMouseEnter={() => setHoveredStep(index)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <div className="tracking-custom-description">{step.description}</div>
          <div className="tracking-custom-time">{step.time}</div>
          {index < trackingSteps.length - 1 && <div className="tracking-custom-line"></div>}

          {/* Tooltip com texto diferente */}
          {hoveredStep === index && (
            <div className="tooltip">
              {step.tooltipText}
              <div className='mail'>
                 <a href="mailto:jorgeantoniomeireles@gmail.com">Envie um e-mail</a>.
                </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressHorizontal;
