'use client';

import React, { useState } from 'react';
import './progress01.css';

const trackingSteps = [
  { title: "Passo 01", status: "complete", tooltipText: "A defesa do réu é um direito fundamental garantido pela Constituição, assegurando que todos tenham acesso a um julgamento justo." },
  { title: "Passo 02", status: "pending", tooltipText: "O juiz deve analisar cuidadosamente as provas apresentadas para tomar uma decisão imparcial, respeitando os princípios da justiça." },
  { title: "Passo 03", status: "pending", tooltipText: "O prazo para a apresentação de recursos é um aspecto crucial do processo, garantindo que as partes possam contestar decisões que considerem injustas." },
  { title: "Passo 04", status: "pending", tooltipText: "A mediação e a conciliação são métodos alternativos de resolução de conflitos que visam evitar o prolongamento de processos judiciais." },
  { title: "Passo 05", status: "pending", tooltipText: "A sentença proferida pelo juiz deve ser devidamente fundamentada, permitindo que as partes compreendam as razões da decisão e possam exercer seu direito de recurso." },
];

const ProgressVertical = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="tracking-container">
      <div className="tracking-header">Status do Processo</div>
      <div className="tracking-steps">
        {trackingSteps.map((step, index) => (
          <div
            key={index}
            className={`tracking-step ${step.status}`}
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="tracking-description">{step.title}</div>
            <div className={`tracking-line ${step.status === 'complete' ? 'active-line' : ''}`}></div>

            {/* Tooltip com texto diferente */}
            {hoveredStep === index && (
              <div className="tooltip1">
                {step.tooltipText}
                <div className='mail1'>
                 <a href="mailto:jorgeantoniomeireles@gmail.com">Envie um e-mail</a>.
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressVertical;
