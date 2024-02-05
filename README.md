
# Questionário

Backend construído com NestJS para um sistema de questionários. O foco principal deste projeto é fornecer um conjunto de APIs que permitam a manipulação de dados relacionados a Usuários, Questionários, Perguntas e Respostas. Utilizando a arquitetura limpa, a aplicação proporciona operações de CRUD (Create, Read, Update, Delete) através do Sequelize para interação com o banco de dados. Além disso, a documentação da API é gerada automaticamente pelo Swagger, facilitando a compreensão e integração por parte dos desenvolvedores.
## Instalação

#### Instale as dependencias
```bash
  npm start
```

### Instale a CLI do Sequelize
```bash
    npm i sequelize-cli
```

### Gere o banco de Dados
```bash
    npx sequelize-cli db:create

```

### Gere o banco de Dados
```bash
    npx sequelize-cli db:create

```

### Gere a migration
```bash
    npx sequelize-cli db:migrate --migrations-path src/database/migrations

```
### Start
```bash
    npm run start
```
## O Sistema
No sistema em questão, é possível manipular os seguintes cruds:

- #### Usuario

- #### Questionário

- #### Pergunta

- #### Resposta


## Techs

#### Sequelize
- O Sequelize é uma biblioteca para Node.js que facilita a interação com bancos de dados relacionais, como o PostgreSQL. Ele simplifica as operações de banco de dados, permitindo que desenvolvedores criem consultas SQL de maneira mais intuitiva usando JavaScript. Isso simplifica o processo de integração do banco de dados com aplicativos web, tornando a manipulação de dados mais eficiente.

#### PostgreSQL
- O PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é conhecido por sua confiabilidade, robustez e conformidade com padrões. O PostgreSQL é usado para armazenar e recuperar dados de maneira estruturada, sendo uma escolha popular para aplicativos que exigem consistência e escalabilidade. Ele suporta recursos avançados, como consultas complexas e transações, tornando-o uma poderosa solução para armazenamento de dados.

#### Typescript:
- Typescript é uma linguagem de programação que estende o JavaScript, adicionando um sistema de tipos estáticos. Isso significa que o Typescript permite aos desenvolvedores declarar o tipo de dado de uma variável, o que ajuda a prevenir erros comuns durante o desenvolvimento e proporciona um código mais robusto e fácil de entender.

#### Arquitetura Limpa
- A Arquitetura Limpa é um conceito de design de software que enfatiza a separação de preocupações e a organização hierárquica do código. Ela propõe a divisão do sistema em camadas, onde cada camada tem responsabilidades específicas. O objetivo é manter o código flexível e independente de frameworks, facilitando a manutenção e a evolução do software ao longo do tempo.

#### Swagger
- O Swagger é uma ferramenta que simplifica a documentação e teste de APIs. Ele fornece uma interface visual amigável para explorar e testar endpoints de API, além de gerar automaticamente documentação compreensível. O Swagger facilita a colaboração entre desenvolvedores e equipes, pois oferece uma visão clara dos pontos de extremidade disponíveis e dos parâmetros necessários para cada solicitação, promovendo a interoperabilidade e a compreensão fácil da API.
