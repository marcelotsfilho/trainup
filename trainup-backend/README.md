# TrainUp Backend (Node.js + MySQL)

Este repositório contém um backend didático em Node.js usando Express que se conecta a um banco de dados MySQL local. Serve como API para uma aplicação mobile.

## Estrutura básica

- `src/` - código fonte
- `sql/` - script de criação do banco e tabela de exemplo
- `.env.example` - exemplo de variáveis de ambiente

## Pré-requisitos

- Node.js (>= 16)
- MySQL instalado localmente
- Cliente `mysql` disponível no PATH (opcional, para importar o arquivo SQL)

## Passos para rodar (PowerShell)

1. Abrir PowerShell e posicionar na pasta do projeto:

```powershell
Set-Location -Path 'e:\projetos\trainup\trainup-backend'
```

2. Copiar `.env.example` para `.env` e ajustar credenciais:

```powershell
Copy-Item .env.example .env
# editar .env com seu editor preferido (notepad, code, etc.)
notepad .env
```

3. Instalar dependências:

```powershell
npm install
```

4. Criar o banco de dados local e tabelas usando o script SQL (exige cliente `mysql`):

```powershell
# caso seu usuário seja root e peça senha, will prompt for password
mysql -u root -p < .\sql\schema.sql
```

Se preferir, abra o MySQL Workbench e rode o arquivo `sql\schema.sql` manualmente.

5. Rodar em modo de desenvolvimento (com `nodemon`):

```powershell
npm run dev
```

API de exemplo:
- `GET /users` - lista usuários
- `GET /users/:id` - retorna usuário por id

## Observações

- O projeto é intencionalmente simples e didático. Substitua as configurações e melhore conforme necessário.

