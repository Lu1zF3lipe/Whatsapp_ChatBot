# INICIO

## Primeira mensagem (FIRST_MESSAGE_STEP)

- Mensagem: Informe o seu nome completo
- Ação: Cria registro do usuário no banco (MessageContextService)
- Proximo Step: USERNAME_STEP

## Nome do usuário (USERNAME_STEP)

- Ação: Atualiza o registro com o nome do usuário
- Mensagem: Informe o seu cpf
- Proximo Step: CPF_STEP

## CPF do usuário (CPF_STEP)

- Validar o CPF do usuário
  - Se for valido
    - Ação: Atualiza o registro com o CPF do usuário
    - Mensagem: Informe o seu CEP
    - Proximo Step: CEP_STEP
  - Se não for valido
    - Ação: undefined
    - Mensagem: Informe um CPF válido
    - Proximo Step: undefined

## CEP do usuário (CEP_STEP)

- Ação: Atualiza o registro com o CEP do usuário
- Mensagem: O seu CEP é {user.CEP}
- Proximo Step: INFORMATION_STEP

## Informa o usuário (INFORMATION_STEP)

- Ação: undefined
- Mensagem: as informações do usuário em si
- Proximo Step: undefined
