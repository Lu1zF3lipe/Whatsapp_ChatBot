# Twilio Whatsapp Bot

Este repositório contem um projeto de um bot para o whatsapp utilizando a API da Twilio

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`TWILIO_ACCOUNT_SID`

`TWILIO_AUTH_TOKEN`

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Lu1zF3lipe/Whatsapp_ChatBot
```

Entre no diretório do projeto

```bash
  cd Whatsapp_ChatBot
```

Rode o docker compose

```bash
  docker-compose up
```

Crie um tunel para acessar a api pela web utilizando o [serveo](https://serveo.net) e adicione o link do callback no site da twilio

```bash
  ssh -R 80:localhost:3000 serveo.net
```


## Documentação

### Steps para o cadastro

Ao enviar a primeira mensagem o usuário inicia o fluxo no step **FIRST_MESSAGE_STEP**
|Step|Valido|Proximo Step|Mensagem|
|-|-|-|-|
|FIRST_MESSAGE_STEP|✔️|USERNAME_STEP|Olá, seja bem vindo!!!\npara continuar com o cadastro informe o seu nome completo|
|USERNAME_STEP|✔️|CPF_STEP|Perfeito!! Agora informe o seu CPF sem pontos, traços ou espaços|
|CPF_STEP|✔️|CEP_STEP|Agora me informe o seu CEP|
|CPF_STEP|❌| |o CPF informado nao é valido!!! Por favor digite um CPF valido|
|CEP_STEP|✔️|COMMAND_OPTION_STEP|Seu endereço é:\n\nRua: {logradouro}\nbairro: {bairro}\ncidade: ${localidade}\nUF: ${uf}|
|CEP_STEP|❌| |o CEP informado nao é valido!!! Por favor digite um CEP valido|

### Commandos apos o cadastro

Quando o usuário chega no step **COMMAND_OPTION_STEP** ao enviar uma mensagem que não está presente na lista de opções ele recebera a listagem de opções:

```
Escolha uma das opção abaixo:

1) ver suas informações
2) apagar cadastro
3) ver endereço
```

### Opção 1 [ver suas informações]

```
Nome: {name}
CPF: {cpf}
CEP: {cep}
```

### Opção 2 [apagar cadastro]

Quando o usuário escolher essa opção o cadastor no banco de dados será deletado oque acabara ocasionando de o usuário voltar para o step **FIRST_MESSAGE_STEP** por não possuir mais o cadastro no banco:

```
O seu cadastro foi deletado com sucesso! Para se cadastrar novamente envie qualquer mensagens!!
```

### Opção 3 [ver endereço]

```
Seu endereço é:

rua: {logradouro}
bairro: {bairro}
cidade: {localidade}
UF: {uf}
```

## Tecnologias Utilizada

- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Twilio](https://www.twilio.com/pt-br)
- [Prisma](https://www.prisma.io/)
- [Axios](https://axios-http.com/)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)