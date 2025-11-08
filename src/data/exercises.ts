export type ExerciseItem = { id: string; name: string; repeticoes: string };

export const EXERCISES: Record<string, ExerciseItem[]> = {
  A: [
    { id: 'A-1', name: 'Crucifixo Máquina', repeticoes: '4x12' },
    { id: 'A-2', name: 'Crossover Polia Alta', repeticoes: '3x12' },
    { id: 'A-3', name: 'Crucifixo Inclinado com Halteres + Supino Inclinado com Halteres', repeticoes: '4x12 - 4x12' },
    { id: 'A-4', name: 'Banco Supino Reto', repeticoes: '3x10' },
    { id: 'A-5', name: 'Elevação Lateral Inclinado com Halteres', repeticoes: '2x15' },
    { id: 'A-6', name: 'Elevação Lateral Sentado com Halteres', repeticoes: '4x12' },
    { id: 'A-7', name: 'Triceps Paralelas', repeticoes: '4x10' },
  ],
  B: [
    { id: 'B-1', name: 'Barra Fixa (Pegada Aberta)', repeticoes: '4xFalha' },
    { id: 'B-2', name: 'Puxada Aberta Barra Reta', repeticoes: '3x12' },
    { id: 'B-3', name: 'Remada Curvada com Barra Reta (Pegada Pronada)', repeticoes: '4x10' },
    { id: 'B-4', name: 'Remada Cavalinho', repeticoes: '3x12' },
    { id: 'B-5', name: 'Remada Máquina (Pegada Supinada)', repeticoes: '3x12' },
    { id: 'B-6', name: 'Remada Alta no Smith', repeticoes: '3x10' },
    { id: 'B-7', name: 'Pulldown com Corda', repeticoes: '3x12' },
    { id: 'B-8', name: 'Abdominal Canivete', repeticoes: '4x10' },
  ],
  C: [
    { id: 'C-1', name: 'Agachamento Hack Invertido', repeticoes: '4x6-10' },
    { id: 'C-2', name: 'Bulgaro com Halteres', repeticoes: '3x10' },
    { id: 'C-3', name: 'Leg Press 45° Unilateral', repeticoes: '3x12' },
    { id: 'C-4', name: 'Leg Press 45°', repeticoes: '4x12-15' },
    { id: 'C-5', name: 'Mesa Flexora', repeticoes: '4x10-12' },
    { id: 'C-6', name: 'Cadeira Extensora', repeticoes: '5x8-12' },
  ],
  D: [
    { id: 'D-1', name: 'Crucifixo Inverso Máquina + Crucifixo Inverso Sentado', repeticoes: '4x10' },
    { id: 'D-2', name: 'Elevação Lateral Inclinado com Halteres', repeticoes: '3x10' },
    { id: 'D-3', name: 'Elevação Lateral Sentado com Halteres', repeticoes: '4x10' },
    { id: 'D-4', name: 'Elevação Lateral com Halteres', repeticoes: '4x10 drop set 50% da carga + 10 rep' },
    { id: 'D-5', name: 'Tríceps Francês na Polia com Barra Reta', repeticoes: '3x12' },
    { id: 'D-6', name: 'Tríceps na Polia com Barra W', repeticoes: '3x12' },
    { id: 'D-7', name: 'Tríceps Invertido na Polia com Barra', repeticoes: '3x12' },
    { id: 'D-8', name: 'Tríceps Unilateral na Polia Alta', repeticoes: '3x12' },
  ],
};