# **TRAINUP**

## Aplicativo para a disciplina de Programação para Dispositivos Móveis  

A disciplina de **Programação para Dispositivos Móveis** estabelece como atividade avaliativa o desenvolvimento de uma aplicação prática ao longo do semestre.  
A proposta apresentada pela equipe composta por **Marcelo Teixeira de Sousa Filho** e **Rafaela Oliveira Lorenzeto Braga** consiste no **TrainUp**, um aplicativo voltado para a **gestão de treinos em academias**.  

O aplicativo permitirá ao usuário:  
- Acessar notícias e comunicados da academia, como horários de funcionamento em feriados e finais de semana.  
- Consultar o status de pagamento de sua mensalidade.  
- Visualizar, de forma prática e organizada, sua ficha de treino diretamente no celular.
- Cronometrar e registrar o histórico de execução dos treinos.

---

## 🛠 Tecnologias e Requisitos Não-Funcionais

Este projeto foi desenvolvido atendendo a requisitos não-funcionais de arquitetura moderna, escalabilidade e experiência do usuário. Abaixo estão as tecnologias utilizadas:

### Frontend (Mobile)
*   **Framework:** [React Native](https://reactnative.dev/) com [Expo SDK](https://expo.dev/) - Escolhido pela facilidade de prototipação e desenvolvimento multiplataforma.
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/) - Garante tipagem estática, reduzindo erros em tempo de execução e melhorando a manutenção do código.
*   **Estilização:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS) - Permite estilização rápida, responsiva e consistente através de classes utilitárias.
*   **Navegação:** [Expo Router](https://docs.expo.dev/router/introduction/) - Sistema de rotas baseado em arquivos, simplificando a estrutura de navegação do app.
*   **Gerenciamento de Estado:** **React Context API** - Utilizada para gerenciar estados globais da aplicação, como:
    *   `AuthContext`: Autenticação e persistência de sessão do usuário.
    *   `TimerContext`: Controle do cronômetro de treino.
    *   `WorkoutContext`: Gerenciamento dos dados de exercícios e fichas.
*   **Cliente HTTP:** [Axios](https://axios-http.com/) - Para comunicação eficiente com a API REST.

### Backend & Infraestrutura
*   **API REST:** [Node.js](https://nodejs.org/) com [Express.js](https://expressjs.com/) - Backend que processa as regras de negócio e comunicação com o banco de dados.
*   **Linguagem Backend:** [TypeScript](https://www.typescriptlang.org/) - Mesmo rigor de tipagem do frontend para consistência.
*   **Autenticação:** JWT (JSON Web Tokens) - Para segurança e gerenciamento de sessões de usuário.

### Banco de Dados
*   **MongoDB** - Banco de dados NoSQL em nuvem para armazenamento flexível e escalável de:
    *   Dados de usuários (perfil, cadastro, dados adicionais)
    *   Fichas de treino e exercícios
    *   Histórico de treinos
    *   Informações de pagamento

### Deploy & Hospedagem
*   **Vercel** - Plataforma de Cloud Computing (PaaS) para hospedagem da API REST Node.js
    *   CI/CD automático integrado com repositório Git
    *   Escalabilidade automática conforme demanda
    *   Hospedagem gratuita para projetos educacionais
    *   Domínio personalizado disponível


---

## Requisitos Não-Funcionais

O projeto foi desenvolvido seguindo princípios de qualidade de software, atendendo aos seguintes requisitos não-funcionais:

### Escalabilidade
- **Backend:** Node.js permite processamento eficiente de múltiplas requisições simultâneas
- **Banco de Dados:** MongoDB suporta crescimento horizontal dos dados
- **Hospedagem:** Vercel oferece auto-scaling automático conforme demanda

### Performance
- **Tipagem:** TypeScript reduz erros em tempo de execução
- **Network:** Axios otimiza requisições HTTP com interceptadores
- **Mobile:** React Native oferece performance nativa similar a aplicativos nativos

### Segurança
- **Autenticação:** JWT para validação segura de sessões
- **Criptografia:** Senhas com hash MD5 no backend
- **CORS:** Configuração adequada para proteção contra requisições maliciosas

### Manutenibilidade
- **Código:** Estrutura em TypeScript garante consistência e autocompletar
- **Separação de Responsabilidades:** Componentes, contextos e serviços bem definidos

### Disponibilidade
- **Uptime:** Vercel fornece SLA confiável para produção
- **Banco de Dados:** MongoDB com backup automático
- **API:** REST sempre disponível para o cliente mobile

---

## 📋 Estrutura do Projeto

A aplicação segue uma estrutura organizada para facilitar a manutenção e escalabilidade:

### Frontend (Mobile)

```bash
trainup-frontend-main/
├── assets/                 # Recursos estáticos (imagens, ícones)
├── src/
│   ├── api/                # Serviços de comunicação com o Backend
│   │   ├── api.ts          # Configuração do Axios
│   │   └── services.ts     # Chamadas HTTP para a API
│   ├── app/                # Rotas e telas (Expo Router)
│   │   ├── _layout.tsx     # Layout principal
│   │   ├── (auth)/         # Rotas de autenticação
│   │   │   ├── _layout.tsx
│   │   │   ├── index.tsx
│   │   │   └── login.tsx
│   │   ├── (tabs)/         # Rotas principais (Tabs)
│   │   │   ├── _layout.tsx
│   │   │   ├── home.tsx
│   │   │   ├── payment.tsx
│   │   │   ├── profile.tsx
│   │   │   └── workout/
│   │   └── (stack)/        # Rotas de pilha
│   ├── components/         # Componentes reutilizáveis da UI
│   │   ├── AdditionalData.tsx
│   │   ├── ExerciseCard.tsx
│   │   ├── PaymentList.tsx
│   │   ├── ProfileHeader.tsx
│   │   ├── Timer.tsx
│   │   ├── Training.tsx
│   │   └── WorkoutCard.tsx
│   ├── context/            # Contextos do React (Estado Global)
│   │   ├── AuthContext.tsx
│   │   ├── PaymentContext.tsx
│   │   ├── TimerContext.tsx
│   │   └── WorkoutContext.tsx
│   ├── data/               # Dados estáticos/mockados
│   │   ├── exercises.ts
│   │   ├── pagamentosAbertos.ts
│   │   └── pagamentosPagos.ts
│   └── styles/             # Estilização global
│       └── global.css
├── app.json                # Configuração do Expo
├── package.json            # Dependências do projeto
├── tsconfig.json           # Configuração do TypeScript
└── README.md               # Documentação do projeto
```

### Backend (API REST)

```bash
trainup-backend-main/
├── src/
│   ├── controllers/        # Lógica de negócio das rotas
│   │   ├── exercisesController.ts    # Controla operações de exercícios
│   │   └── usersController.ts        # Controla operações de usuários
│   ├── middleware/         # Middlewares de autenticação e validação
│   │   └── auth.ts         # Middleware de proteção de rotas com JWT
│   ├── models/             # Modelos de dados (Schemas do MongoDB)
│   │   ├── Exercise.ts     # Schema para exercícios
│   │   ├── Payment.ts      # Schema para pagamentos
│   │   ├── User.ts         # Schema para usuários
│   │   └── WorkoutHistory.ts  # Schema para histórico de treinos
│   ├── routes/             # Definição das rotas da API
│   │   ├── exercises.ts    # Rotas relacionadas a exercícios
│   │   └── users.ts        # Rotas relacionadas a usuários
│   ├── utils/              # Utilitários e funções auxiliares
│   │   └── response.ts     # Formatação de respostas HTTP
│   ├── db.ts               # Configuração da conexão com MongoDB
│   └── index.ts            # Arquivo principal da aplicação
├── package.json            # Dependências do projeto
├── tsconfig.json           # Configuração do TypeScript
├── vercel.json             # Configuração de deploy na Vercel
└── README.md               # Documentação do projeto
```

**Endpoints da API:**
- `POST /users/register` - Registrar novo usuário
- `POST /users/login` - Login de usuário
- `GET /users/:id` - Obter dados do usuário
- `PUT /users/:id` - Atualizar dados do usuário
- `GET /exercises/user/:userId` - Obter exercícios do usuário
- `POST /exercises/user/:userId` - Adicionar exercício
- `PUT /exercises/:id` - Atualizar exercício
- `DELETE /exercises/:id` - Deletar exercício
- `POST /exercises/history` - Registrar histórico de treino

---

## Como executar o projeto

Para utilizar localmente, basta seguir os seguintes passos após clonar do GitHub:

1. **Pré-requisitos:**
   - Node.js instalado (versão LTS recomendada)
   - Gerenciador de pacotes (npm ou yarn)
   - Aplicativo Expo Go instalado no celular (ou emulador configurado)

2. **Clonar o repositório**
   ```bash
   git clone https://github.com/marcelotsfilho/trainup.git
   cd ./trainup/trainup-frontend-main
   ```

3. **Instalar as dependências**
   ```bash
   npm install
   ```

4. **Iniciar o servidor de desenvolvimento**
   ```bash
   npx expo start
   ```

5. **Executar a emulação no celular**
   - Abra o aplicativo Expo Go em seu dispositivo móvel.
   - Escaneie o QR Code gerado no terminal.
   - A aplicação será carregada automaticamente.
