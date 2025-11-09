export type ExerciseItem = { id: string; name: string; repeticoes: string; carga: string;gifUrl?: string };

export const EXERCISES: Record<string, ExerciseItem[]> = {
  A: [
    { id: 'A-1', name: 'Crucifixo Máquina', repeticoes: '4x12', carga: '30 Kg', gifUrl: 'https://i.pinimg.com/originals/52/13/70/521370b11372e5477a500009f1bbae51.gif' },
    { id: 'A-2', name: 'Crossover Polia Alta', repeticoes: '3x12',  carga: '25 Kg',gifUrl: 'https://i.pinimg.com/originals/86/99/43/8699435cd110bbdbc4f06f56b6c4cf6e.gif' },
    { id: 'A-3', name: 'Crucifixo Inclinado com Halteres + Supino Inclinado com Halteres', repeticoes: '4x12 - 4x12',  carga: '30 Kg',gifUrl: 'https://i.pinimg.com/originals/0f/f0/36/0ff03674203750037f678f9afa848a1c.gif' },
    { id: 'A-4', name: 'Banco Supino Reto', repeticoes: '3x10', carga: '30 Kg', gifUrl: 'https://i.pinimg.com/originals/8e/34/bb/8e34bb41d30ceb2f65aa7873a87a4371.gif' },
    { id: 'A-5', name: 'Elevação Lateral Inclinado com Halteres', repeticoes: '2x15', carga: '25 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' }, // nao encontrado o gif
    { id: 'A-6', name: 'Elevação Lateral Sentado com Halteres', repeticoes: '4x12', carga: '30 Kg', gifUrl: 'https://i.pinimg.com/originals/09/d5/db/09d5db5510553b5048979f167aa78fe4.gif' },
    { id: 'A-7', name: 'Triceps Paralelas', repeticoes: '4x10', carga: '30 Kg', gifUrl: 'https://i.pinimg.com/originals/e3/55/03/e35503cbb5478bfd9ef67c4a0f11f50d.gif' },
  ],
  B: [
    { id: 'B-1', name: 'Barra Fixa (Pegada Aberta)', repeticoes: '4xFalha', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'B-2', name: 'Puxada Aberta Barra Reta', repeticoes: '3x12', carga: '25 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'B-3', name: 'Remada Curvada com Barra Reta (Pegada Pronada)', repeticoes: '4x10', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'B-4', name: 'Remada Cavalinho', repeticoes: '3x12', carga: '25 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'B-5', name: 'Remada Máquina (Pegada Supinada)', repeticoes: '3x12', carga: '25 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'B-6', name: 'Remada Alta no Smith', repeticoes: '3x10', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'B-7', name: 'Pulldown com Corda', repeticoes: '3x12', carga: '25 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'B-8', name: 'Abdominal Canivete', repeticoes: '4x10', carga: '25 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
  ],
  C: [
    { id: 'C-1', name: 'Agachamento Hack Invertido', repeticoes: '4x6-10', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'C-2', name: 'Bulgaro com Halteres', repeticoes: '3x10', carga: '25 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'C-3', name: 'Leg Press 45° Unilateral', repeticoes: '3x12', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'C-4', name: 'Leg Press 45°', repeticoes: '4x12-15', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'C-5', name: 'Mesa Flexora', repeticoes: '4x10-12', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'C-6', name: 'Cadeira Extensora', repeticoes: '5x8-12', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
  ],
  D: [
    { id: 'D-1', name: 'Crucifixo Inverso Máquina + Crucifixo Inverso Sentado', repeticoes: '4x10', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'D-2', name: 'Elevação Lateral Inclinado com Halteres', repeticoes: '3x10', carga: '25 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'D-3', name: 'Elevação Lateral Sentado com Halteres', repeticoes: '4x10', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'D-4', name: 'Elevação Lateral com Halteres', repeticoes: '4x10 drop set 50% da carga + 10 rep', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'D-5', name: 'Tríceps Francês na Polia com Barra Reta', repeticoes: '3x12', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'D-6', name: 'Tríceps na Polia com Barra W', repeticoes: '3x12', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'D-7', name: 'Tríceps Invertido na Polia com Barra', repeticoes: '3x12', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
    { id: 'D-8', name: 'Tríceps Unilateral na Polia Alta', repeticoes: '3x12', carga: '30 Kg', gifUrl: 'https://www.musclewiki.com/media/uploads/male-machine-fly-front_1eYnHOy.gif' },
  ],
};