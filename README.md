# Teste Prático Fullstack JS - Backend

## Proposta de soluçåo

Desenvolver um sistema com um catálogo de aulas por módulo.

## Tecnologias utilizadas
- ReactJS
- React Hooks
- NodeJS
- Express
- TypeScript
- Axios
- SASS
- PostgresSQL
- JWT
- Prettier
- ESLint

## Como rodar o projeto (backend)

- Instale o banco de dados PostgresSQL: `https://www.postgresql.org/download/`

Caso tenha o Docker instalado, pode optar por instalar com os seguintes comandos:
```
docker pull postgres
```
```
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

- Clone este repositório
```
git clone git@github.com:guiprais/verzel-be.git
```
- Acesse a pasta do projeto
```
cd verzel-be
```
- Instale as dependências
```
npm install
```
ou
```
yarn
```
- Configure o arquivo /src/database/index.ts com as informações do seu Postgres (port, user e password). Caso tenha instalado via Docker com os comandos acima, não será necessário alterar nada
- Restaure o banco de dados (instruções de como restaurar o banco de dados logo abaixo)
- Rode o servidor
```
npm run dev
```
ou
```
yarn dev
```

## Restaurando o Banco de Dados

- Existe um arquivo dentro de /src/database que se chama "verzel.sql", que irá servir para restauração do banco de dados. Caso tenha instalado o Postgres via Docker com os comandos acima, basta usar o seguinte comando:
```
cat src/database/verzel.sql | docker exec -i pg psql -U root
```

- Caso contrário, execute o seguinte comando:

```
psql -U SEU_USUARIO_POSTGRES -f src/database/verzel.sql
```
