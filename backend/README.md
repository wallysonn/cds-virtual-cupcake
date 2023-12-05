# API BACKEND
Esta é uma simples api para fornecer dados públicos para o frontend.

## Configuração inicial
Crie um arquivo .env na raiz do projeto e adicione sua string de conexão com o mongodb.

```
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<endereco>/<cluster>?retryWrites=true&w=majority"
```

## Como rodar

```
yarn install
```

## Execute o comando de seeder para popular o banco de dados

```
yarn seed
```