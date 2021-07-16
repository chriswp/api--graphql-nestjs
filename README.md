
## Projeto
Projeto feito com o framework [NestJS](https://github.com/nestjs/nest), consiste em um exemplo de como funciona uma API [GRAPHQL](https://graphql.org/) .<br>
A API é um simples sistema de cadastro de notícias. Onde cada notícia possui sua respectiva categoria e suas determinadas tags. <br>
A ideia desse projeto é apenas demonstrar como é criado uma API GRAPHQL de uma forma simples e rápida com o framework escolhido. <br>

## Tecnologias
- [NestJS](https://github.com/nestjs/nest)
- [GraphQL](https://graphql.org/)
- [JWT](https://github.com/nestjs/jwt)
- [NestJs-Query](https://doug-martin.github.io/nestjs-query/docs/introduction/install)
- Docker
- MySQL


## Configurações
Por padrão o arquivo de configuração lido, ao ser executado o script, é o `.env`
```
NODE_ENV=development
APP_NAME="APP GraphQL"
APP_PORT=3000
APP_DEBUG=true

DB_CONNECTION=mysql
DB_HOST=api-graphql-db
DB_DATABASE=api_graphql
DB_USERNAME=root
DB_PASSWORD=root
DB_PORT=3306

PASSWORD_SALT=10
JWT_SECRET=TaphucaxathOcrl7lswUSWapreb3bakIpopuh9nlbot7iR6wrIbrlgeWre1oPham
JWT_EXPIRES=7d
```

## Aplicação
Para iniciar o projeto, deve-se executar o seguinte comando:
```
./app start
```

Caso, necessite parar os containers:
```
./app stop
```
Restart:
```
./app restart all
```
obs: é possível dar _restart_ em apenas um determinado container, substituindo o parametro `all`, por
`app` ou `db`.

Para maiores detalhes sobre os comandos que a aplicação possui, execute:
```
./app -h
```

## API
Toda API GraphQL possui apenas uma única rota. A rota definida nessa aplicação é:
```
http://localhost:3000/graphql
```

## Documentação Aplicação
A documentação da aplicação pode ser acessada através da url:
```
http://localhost:8080
```
Porém para ter acesso a documentação, deve-se executar, antes, o comando abaixo:
```
./app npx @compodoc/compodoc -p tsconfig.json -s
```

## Documentação API GraphQL

A documentação da API pode ser acessada através da url:
```
http://localhost:3000/graphql/playground
```
Nesse ambiente é possível verificar todas queries e mutations e seus respectivos retornos disponíveis. <br>
É possível, também, realizar os testes das queries e mutations. <br>

Obs: Todas as mutations executadas, nesse ambiente, é salvo no banco definido no arquivo de configuração `.env`. <br>

## Autenticação
A aplicação usado, como informado anteriormente, utiliza o token JWT para realizar autenticação. <br>
Para realizar o login execute a mutation abaixo:
```
mutation{
  login(credentials: {
    email: "email@mail.com",
    senha: "102030"
  }){
    token
  }
}
```

obs: Lembrando que é necessário cadastrar um usuário antes, senão não vai né... :smiley:

## Exemplos
query:
```
query{
  noticias{
    edges{
      node{
        id
        titulo
        categoria{
          id
          nome
        }
      }
    }
  }
}
```

mutation:
```
mutation {
  createNoticia(
    input: {
      noticia: {
        titulo: "noticia exemplo"
        categoria_id: 500
        descricao: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blanditV"
        conteudo: "ivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet"
        data_publicacao: "2020-12-05"
        ativo: true
      }
    }
  ) {
    id
    titulo
  }
}
```













