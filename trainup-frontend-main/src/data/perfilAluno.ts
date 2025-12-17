export interface PerfilHeader {
  nome: string;
  matricula: string;
}

export interface Estatisticas {
  percentual: number;
}

export interface DadosCadastrais {
  cpf: string;
  dataNascimento: string;
}

export interface DadosAdicionais {
  celular: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface PerfilAluno {
  perfilHeader: PerfilHeader;
  estatisticas: Estatisticas;
  dadosCadastrais: DadosCadastrais;
  dadosAdicionais: DadosAdicionais;
}

export const dadosPerfilAluno: PerfilAluno = {
  "perfilHeader": {
    "nome": "Marcelo Teixeira de Sousa Filho",
    "matricula": "1234"
  },
  "estatisticas": {
    "percentual": 40
  },
  "dadosCadastrais": {
    "cpf": "123.456.789-00",
    "dataNascimento": "15/05/2001"
  },
  "dadosAdicionais": {
    "celular": "(32) 99123-4567",
    "endereco": "Rua das Flores, 123",
    "bairro": "Centro",
    "cidade": "Leopoldina",
    "estado": "MG"
  }
};