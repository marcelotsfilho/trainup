import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// definição da interface do contexto do timer
interface TimerContextData {
  tempoDecorrido: number;
  iniciado: boolean;
  toggleCronometro: () => void;
}

// criação do contexto
const TimerContext = createContext<TimerContextData | undefined>(undefined);

// 3. criação do provider (faz o papel de pai do estado)
export function TimerProvider({ children }: { children: ReactNode }) {
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

  const value = {
    tempoDecorrido,
    iniciado,
    toggleCronometro,
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