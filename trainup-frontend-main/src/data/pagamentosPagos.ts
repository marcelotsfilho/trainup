export interface PagamentosPagos {
    id: number;
    mes: string;
    dataVenc: string;
    valor: string;
    status: 'aberto' | 'pago';
}

export const dadosPagamentosPagos: PagamentosPagos[] = [
    { "id": Math.random(), "mes": "Set/2025", "dataVenc": "10/10/2025", "valor": "100,00", "status": "pago" },
    { "id": Math.random(), "mes": "Ago/2025", "dataVenc": "10/09/2025", "valor": "100,00", "status": "pago" },
    { "id": Math.random(), "mes": "Jul/2025", "dataVenc": "10/08/2025", "valor": "100,00", "status": "pago" },
    { "id": Math.random(), "mes": "Jun/2025", "dataVenc": "10/07/2025", "valor": "100,00", "status": "pago" },
    { "id": Math.random(), "mes": "Mai/2025", "dataVenc": "10/06/2025", "valor": "100,00", "status": "pago" },
];