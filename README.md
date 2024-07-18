![Código Certo Coders](https://utfs.io/f/3b2340e8-5523-4aca-a549-0688fd07450e-j4edu.jfif)

# 📚 Trilha Inicial BackEnd Jr
Este projeto tem como objetivo desenvolver uma API RESTful para gerenciamento de tarefas, proporcionando funcionalidades de CRUD (Create, Read, Update, Delete) de tarefas, autenticação de usuários e armazenamento dos dados em um banco de dados.

## Objetivos:
- Criar uma API que permita CRUD (Create, Read, Update, Delete) de tarefas.
- Implementar autenticação de usuários.
- Utilizar um banco de dados SQLite para armazenar as tarefas.
- Documentar todo o processo e apresentar as conclusões.

## Requisitos Funcionais:
- Criar Tarefa: Endpoint para criar uma nova tarefa.
- Listar Tarefas por ID da tafefa: Endpoint para mostrar a tarefa com base no id informado.
- Listar Tarefas: Endpoint para mostrar todas as tarefas registradas para o usuário logado.
- Atualizar Tarefa: Endpoint para atualizar uma tarefa existente.
- Deletar Tarefa: Endpoint para deletar uma tarefa existente.

## Autenticação de Usuários:
- Registro de Usuário: Endpoint para registrar um novo usuário.
- Login de Usuário: Endpoint para autenticar um usuário e gerar um token JWT.
- Proteção de Rotas: Garantir que apenas usuários autenticados possam acessar os endpoints de tarefas.

## Banco de Dados:
- Foi utilizado SQLite como banco de dados para armazenar informações de usuários e tarefas.

## 💻 Instalação

```bash
# Clonar o repositório
$ git clone https://github.com/YuriCicconi/TrilhaBackEndJR-JUN15.git

# Instalar as dependências
$ npm install
```

## :white_check_mark: Startar projeto
```
$ npm run start
```

## 🛣️ Rotas

### :couple: Users
### 🔵 POST /api/users
### Cadastra usuário no sistema.
### Corpo da requisição:
```javascript
{
   "name": "User",
   "age": 22,
   "email": "user@email.com",
   "password": "123"
}
```
#### * Todos os campos são obrigatórios.

### 🔵 POST /api/login
### Realiza o login do usuário.
### Corpo da requisição:
```javascript
{
   "email": "user@email.com",
   "senha": "123"
}
```
#### * Todos os campos são obrigatórios.

### 🟢 GET /api/users
### Retorna todos os usuários cadastrados no sistema.
#### ** Necessário login do usuário **

## 📚 Tasks
### 🔵 POST /api/tasks
### Cria uma nova tarefa para o usuário logado.
### Corpo da requisição:
```javascript
{
   "name": "Nome da tarefa",
   "description": "Descrição da tarefa"
}
```
#### ** Necessário login do usuário **
#### * Apenas o campo name é obrigatório.

### 🟢 GET /api/tasks/:id
### Retorna a tarefa referente ao ID informado (é necessário que a tarefa esteja designada ao usuário logado.
#### ** Necessário login do usuário **

### 🟢 GET /api/tasks
### Retorna todas as tarefas designadas ao usuário logado.
#### ** Necessário login do usuário **

### 🟡 PATCH /api/tasks/:id
### Altera informações da tarefa referente ao ID informado
### Corpo da requisição:
```javascript
{
   "name": "Novo nome da tarefa",
   "description": "Nova descrição da tarefa"
}
```
#### ** Necessário login do usuário **
#### * Pode ser alterado os 2 campos ou apenas 1.

🔗 **Mantenha-se Conectado:**
- [Discord](https://discord.gg/wzA9FGZHNv)
- [Website](http://www.codigocertocoders.com.br/)
- [LinkedIn](https://www.linkedin.com/company/codigocerto/)
  
🌐 **Contato:**
- Email: codigocertocoders@gmail.com

---

### Precisa de Ajuda?
Está com alguma dificuldade, encontrou algum problema no desafio ou tem alguma sugestão pra gente? Crie uma issue e descreva o que achar necessário.

**Construindo o amanhã, hoje.**
