# API BACKEND
Esta é uma simples api para fornecer dados públicos para o frontend.

## Configuração inicial
Crie um arquivo .env na raiz do projeto e adicione sua string de conexão com o mongodb.

```
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<endereco>/<cluster>?retryWrites=true&w=majority"
GOOGLE_CLIENT_ID=<Fornecido pelo Google Console>
GOOGLE_CLIENT_SECRET=<Fornecido pelo Google Console>
GOOGLE_REDIRECT_URI=http://localhost:3000
```

## Como rodar

```
yarn install
```

## Execute o comando de seeder para popular o banco de dados

```
yarn seed
```