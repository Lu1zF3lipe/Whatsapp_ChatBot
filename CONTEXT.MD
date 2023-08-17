# INICIO

Se não tiver registro o serviço vai emitir o evento "FIRST_STEP"
O serviço que monitorar o evento "FIRST_STEP" vai alterar o status para "CPF_STEP"
O serviço que monitorar o evento "CPF_STEP" vai alterar o status para "CEP_STEP"
O serviço que monitorar o evento "CEP_STEP" vai alterar o status para "FINISHED"
O serviço que monitorar o evento "FINISHED" não altera o status

Um serviço geral que vai receber a mensagem do usuário e vai avalir o contexto da mesma