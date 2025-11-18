export interface PagamentosAbertos {
  id: number;
  mes: string;
  dataVenc: string;
  valor: string;
  status: 'aberto' | 'pago';
}


export const dadosPagamentosAbertos: PagamentosAbertos[] = [
  {
    "id": Math.random(),
    "mes": "Out/2025",
    "dataVenc": "10/11/2025",
    "valor": "100,00",
    "status": "aberto"
  },
  {
    "id": Math.random(),
    "mes": "Nov/2025",
    "dataVenc": "10/12/2025",
    "valor": "100,00",
    "status": "aberto"
  }
];