import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Compass, Star, Sun, Moon, Wind, Mountain, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "Preparación",
    instruction: "Párate firme, respirando profundamente. Encuentra tu 'Este'.",
    details: "Si no conoces el Este magnético, elige una pared (preferiblemente con ventana) y decídete a que esa sea tu dirección sagrada. Visualízate como el centro de tu universo.",
    action: "Mirando al Este",
    visual: "orientation"
  },
  {
    title: "La Cruz de Luz (1/6)",
    instruction: "Visualiza una esfera de luz blanca brillante sobre tu cabeza.",
    details: "Alcanza con tu mente (o mano) esa esfera y haz descender un rayo de luz hasta tu frente.",
    spoken: "MI DIOS ESTÁ ARRIBA MÍO",
    visual: "qabalistic_cross_1"
  },
  {
    title: "La Cruz de Luz (2/6)",
    instruction: "Baja la luz a través de tu cuerpo hasta los genitales.",
    details: "Forma un pilar vertical de luz brillante.",
    spoken: "MI DIOS ESTÁ DEBAJO MÍO",
    visual: "qabalistic_cross_2"
  },
  {
    title: "La Cruz de Luz (3/6)",
    instruction: "Toca tu hombro derecho.",
    details: "Siente la energía en ese punto.",
    spoken: "MI DIOS ESTÁ A MI DERECHA",
    visual: "qabalistic_cross_3"
  },
  {
    title: "La Cruz de Luz (4/6)",
    instruction: "Traza la luz cruzando el pecho hasta tu hombro izquierdo.",
    details: "Has formado la barra horizontal de la cruz.",
    spoken: "MI DIOS ESTÁ A MI IZQUIERDA",
    visual: "qabalistic_cross_4"
  },
  {
    title: "La Cruz de Luz (5/6)",
    instruction: "Cruza tus brazos sobre el pecho (Derecho sobre Izquierdo).",
    details: "Signo de Osiris Resucitado. Siente la unión de las energías.",
    spoken: "MI DIOS ESTÁ EN MÍ",
    visual: "qabalistic_cross_5"
  },
  {
    title: "La Cruz de Luz (6/6)",
    instruction: "Abre los brazos hacia arriba y afuera en forma de 'V'.",
    details: "Proclama tu unidad con el todo. No hay separación.",
    spoken: "NO HAY DIOS DONDE YO ESTOY",
    visual: "qabalistic_cross_6"
  },
  {
    title: "El Círculo: ESTE",
    instruction: "Dibuja el Pentagrama de Destierro de Tierra frente a ti.",
    details: "Empieza en la cadera izquierda -> Sube al centro -> Baja a la derecha. (Ver diagrama abajo). Visualízalo en llamas.",
    visual: "pentagram",
    subAction: "Signo del Entrante + Silencio"
  },
  {
    title: "Vibración al ESTE",
    instruction: "Haz el Signo del Entrante (paso adelante, manos al frente) y vibra:",
    details: "Luego, haz el Signo del Silencio (dedo a los labios) para cortar el flujo de energía.",
    spoken: "THÉRION",
    visual: "god_name"
  },
  {
    title: "Movimiento al NORTE",
    instruction: "Gira hacia tu IZQUIERDA (Anti-horario / Levógiro).",
    details: "Mantén el brazo extendido trazando una línea blanca de fuego que conecta el Este con el Norte.",
    action: "Mirando al Norte",
    visual: "compass_n"
  },
  {
    title: "El Círculo: NORTE",
    instruction: "Dibuja el Pentagrama de Destierro de Tierra.",
    details: "Visualiza el pentagrama azul eléctrico o de fuego dorado frente a ti.",
    visual: "pentagram",
    subAction: "Signo del Entrante + Silencio"
  },
  {
    title: "Vibración al NORTE",
    instruction: "Haz el Signo del Entrante y vibra con fuerza:",
    details: "Recupérate con el Signo del Silencio.",
    spoken: "NÜIT",
    visual: "god_name"
  },
  {
    title: "Movimiento al OESTE",
    instruction: "Gira hacia tu IZQUIERDA hasta mirar atrás.",
    details: "La línea de fuego conecta el Norte con el Oeste.",
    action: "Mirando al Oeste",
    visual: "compass_w"
  },
  {
    title: "El Círculo: OESTE",
    instruction: "Dibuja el Pentagrama de Destierro de Tierra.",
    details: "Mantén la visualización fuerte.",
    visual: "pentagram",
    subAction: "Signo del Entrante + Silencio"
  },
  {
    title: "Vibración al OESTE",
    instruction: "Haz el Signo del Entrante y vibra:",
    details: "Recupérate con el Signo del Silencio.",
    spoken: "BABALON",
    visual: "god_name"
  },
  {
    title: "Movimiento al SUR",
    instruction: "Gira hacia tu IZQUIERDA hasta el Sur.",
    details: "Conecta el círculo de fuego del Oeste al Sur.",
    action: "Mirando al Sur",
    visual: "compass_s"
  },
  {
    title: "El Círculo: SUR",
    instruction: "Dibuja el Pentagrama de Destierro de Tierra.",
    details: "El último pentagrama para cerrar los cuartos.",
    visual: "pentagram",
    subAction: "Signo del Entrante + Silencio"
  },
  {
    title: "Vibración al SUR",
    instruction: "Haz el Signo del Entrante y vibra:",
    details: "Recupérate con el Signo del Silencio.",
    spoken: "HADIT",
    visual: "god_name"
  },
  {
    title: "Cerrar el Círculo",
    instruction: "Gira a la izquierda para volver al ESTE.",
    details: "Visualiza que estás rodeado por un círculo de fuego con 4 pentagramas llameantes.",
    action: "Mirando al Este",
    visual: "orientation"
  },
  {
    title: "La Invocación (Parte 1)",
    instruction: "Extiende los brazos en forma de cruz. Dí:",
    details: "Visualiza paisajes naturales verdes y fértiles frente a ti (Tierra).",
    spoken: "DELANTE MÍO LOS PODERES DE LA TIERRA",
    visual: "element_earth"
  },
  {
    title: "La Invocación (Parte 2)",
    instruction: "Mantén los brazos en cruz. Visualiza detrás de ti.",
    details: "Siente una cascada o agua fresca a tu espalda (Agua).",
    spoken: "DETRÁS MÍO LOS PODERES DEL AGUA",
    visual: "element_water"
  },
  {
    title: "La Invocación (Parte 3)",
    instruction: "Concéntrate en tu lado derecho.",
    details: "Siente calor, una columna de fuego rugiente (Fuego).",
    spoken: "A MI DERECHA LOS PODERES DEL FUEGO",
    visual: "element_fire"
  },
  {
    title: "La Invocación (Parte 4)",
    instruction: "Concéntrate en tu lado izquierdo.",
    details: "Siente vientos fríos y el cielo azul (Aire).",
    spoken: "A MI IZQUIERDA LOS PODERES DEL AIRE",
    visual: "element_air"
  },
  {
    title: "La Invocación (Final)",
    instruction: "Visualiza el cielo estrellado (Nuit) arqueándose sobre ti y una llama en tu corazón (Hadit).",
    spoken: "A MI ALREDEDOR ARDEN LAS ESTRELLAS DE NUIT, Y EN MI INTERIOR ARDE LA ESTRELLA DE HADIT",
    visual: "cosmos"
  },
  {
    title: "Cierre",
    instruction: "Repite la Cruz de Luz completa.",
    details: "1. Arriba mío, 2. Debajo mío, 3. Derecha, 4. Izquierda, 5. En mí, 6. No hay Dios...",
    spoken: "FIN DEL RITUAL",
    visual: "check"
  }
];

const PentagramSVG = () => (
  <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto animate-pulse text-yellow-500">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
      </marker>
    </defs>
    {/* Star path: Bottom-Left (40,160) -> Top-Center (100,20) -> Bottom-Right (160,160) -> Top-Left (20,70) -> Top-Right (180,70) -> Close (40,160) */}
    <path 
      d="M40,160 L100,20 L160,160 L20,70 L180,70 Z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4"
      className="opacity-50"
    />
    {/* Guide arrows for Banishing Earth (Start at hip, up to top) */}
    <path d="M40,160 L100,20" stroke="red" strokeWidth="2" markerEnd="url(#arrow)" className="animate-[dash_3s_linear_infinite]" strokeDasharray="5,5"/>
    <text x="30" y="170" fill="white" fontSize="12">1. Inicio (Cadera Izq)</text>
    <text x="90" y="15" fill="white" fontSize="12">2. Cima</text>
  </svg>
);

const VisualAid = ({ type }) => {
  switch (type) {
    case 'pentagram': return <PentagramSVG />;
    case 'orientation': return <Compass size={64} className="text-blue-400 mx-auto" />;
    case 'compass_n': return <div className="flex flex-col items-center"><RotateCcw size={48} /><span className="mt-2 font-bold text-red-400">NORTE</span></div>;
    case 'compass_w': return <div className="flex flex-col items-center"><RotateCcw size={48} /><span className="mt-2 font-bold text-blue-400">OESTE</span></div>;
    case 'compass_s': return <div className="flex flex-col items-center"><RotateCcw size={48} /><span className="mt-2 font-bold text-yellow-400">SUR</span></div>;
    case 'element_earth': return <Mountain size={64} className="text-green-600 mx-auto" />;
    case 'element_water': return <div className="text-blue-500 text-6xl mx-auto">🌊</div>;
    case 'element_fire': return <div className="text-red-500 text-6xl mx-auto">🔥</div>;
    case 'element_air': return <Wind size={64} className="text-yellow-200 mx-auto" />;
    case 'cosmos': return <div className="flex justify-center gap-4"><Moon size={48} /><Star size={48} /><Sun size={48} /></div>;
    case 'check': return <CheckCircle size={64} className="text-green-400 mx-auto" />;
    default: return <Star size={64} className="text-yellow-100 mx-auto opacity-50" />;
  }
};

export default function EsferaNuApp() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(curr => curr + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(curr => curr - 1);
  };

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-900 h-2">
          <div 
            className="bg-indigo-500 h-2 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center text-center min-h-[400px]">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 mb-2">
            Paso {currentStep + 1} de {steps.length}
          </h2>
          <h1 className="text-2xl font-bold mb-6 text-white">{step.title}</h1>

          {/* Visual Container */}
          <div className="mb-6 h-48 flex items-center justify-center w-full bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
            <VisualAid type={step.visual} />
          </div>

          <p className="text-lg mb-4 leading-relaxed">{step.instruction}</p>
          
          {step.spoken && (
            <div className="bg-slate-700/50 p-4 rounded-lg w-full mb-4 border-l-4 border-indigo-500">
              <p className="text-sm text-slate-400 mb-1 uppercase text-left">Vibra / Dí:</p>
              <p className="text-xl font-serif text-indigo-200 font-bold tracking-wide">
                "{step.spoken}"
              </p>
            </div>
          )}

          {step.details && (
            <p className="text-sm text-slate-400 italic">
              {step.details}
            </p>
          )}
        </div>

        {/* Controls */}
        <div className="p-4 bg-slate-900 flex justify-between items-center">
          <button 
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center px-4 py-2 rounded-lg transition ${currentStep === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-800 text-indigo-300'}`}
          >
            <ArrowLeft size={20} className="mr-2" />
            Anterior
          </button>
          
          <div className="flex gap-1">
             {/* Small dots indicator */}
             {[...Array(steps.length)].map((_, i) => (
               <div key={i} className={`w-1 h-1 rounded-full ${i === currentStep ? 'bg-indigo-500' : 'bg-slate-700'} ${i % 3 !== 0 ? 'hidden sm:block' : ''}`} />
             ))}
          </div>

          <button 
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition ${currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Siguiente
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}