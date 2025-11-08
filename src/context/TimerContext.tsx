// src/context/TimerContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. Defina o que o contexto irá fornecer
interface TimerContextData {
  tempoDecorrido: number;
  iniciado: boolean;
  toggleCronometro: () => void;
  // (Você pode adicionar uma função reset se precisar)
  // resetCronometro: () => void; 
}

// 2. Crie o Contexto
const TimerContext = createContext<TimerContextData | undefined>(undefined);

// 3. Crie o "Provedor" (Provider)
export function TimerProvider({ children }: { children: ReactNode }) {
  // A LÓGICA DO ESTADO VEIO PARA CÁ
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [iniciado, setIniciado] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (iniciado) {
      interval = setInterval(() => {
        setTempoDecorrido((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [iniciado]);

  const toggleCronometro = () => setIniciado((v) => !v);
  
  // Opcional: função de reset
  // const resetCronometro = () => {
  //   setTempoDecorrido(0);
  //   setIniciado(false);
  // };

  const value = {
    tempoDecorrido,
    iniciado,
    toggleCronometro,
    // resetCronometro
  };

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
}

// 4. Crie um "Hook" customizado
export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer deve ser usado dentro de um TimerProvider');
  }
  return context;
}