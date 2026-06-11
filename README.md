# HereSystem

O HereSystem é uma plataforma SaaS de gerenciamento de presença desenvolvida para atender instituições de ensino e treinamento. O sistema foi projetado com arquitetura multi-tenant, permitindo que diferentes organizações utilizem a mesma aplicação de forma isolada e segura.

Embora o projeto tenha surgido com foco em escolas de música, sua arquitetura foi planejada para atender diversos segmentos, como escolas particulares, cursos livres, academias, centros de treinamento e instituições de ensino em geral.

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- PostgreSQL
- Sequelize
- Sequelize Typescript
- JWT Authentication
- bcrypt
- dotenv
- CORS

## 🏗 Arquitetura

O projeto segue uma arquitetura em camadas amplamente utilizada no mercado:

```
src/
├── config/
├── controllers/
├── database/
│   ├── migrations/
│   ├── models/
│   └── index.ts
├── repositories/
├── routes/
├── services/
├── types/
├── app.ts
└── server.ts
```

A separação entre Controllers, Services e Repositories busca facilitar a manutenção, escalabilidade e testabilidade do sistema.

## 🔐 Autenticação

O sistema utiliza autenticação baseada em JWT (JSON Web Token).

Durante o cadastro:

- Uma organização é criada;
- O primeiro usuário é registrado como ADMIN;
- Um token JWT é gerado automaticamente.

Cada usuário pertence a uma organização específica, garantindo isolamento entre os clientes do sistema.

## 🏢 Arquitetura Multi-Tenant

O HereSystem foi desenvolvido utilizando o conceito de multi-tenancy.

```
Organização A
├── Administradores
├── Professores
└── Alunos

Organização B
├── Administradores
├── Professores
└── Alunos
```

Cada organização possui seus próprios usuários e dados, sem compartilhamento entre clientes.

## 📌 Funcionalidades atuais

- Cadastro de organizações;
- Cadastro do primeiro administrador;
- Autenticação JWT;
- Criptografia de senhas com bcrypt;
- Estrutura multi-tenant;
- Persistência em PostgreSQL.

## 📋 Funcionalidades planejadas

- Gestão de professores;
- Gestão de alunos;
- Gestão de turmas;
- Controle de frequência;
- Dashboard administrativo;
- Controle de permissões;
- Documentação Swagger;
- Testes automatizados;
- Frontend Web.
