import { MessageStepEnum } from "../../../enums/message-step-enum";
import { MessageModel } from "../../../models/message-model";
import { User } from "../../../models/user-model";
import { userRepository } from "../../../repositories/user/user.repository";
import { valideteCPF } from "../../../utils/validateCPF";
import { sendMessageService } from "../send-message-service";

export class UserCpfStep {
  public static async handle(message: MessageModel, user: User): Promise<void> {
    if (!valideteCPF(message.Body)) {
      return sendMessageService.sendMenssage("o CPF informado nao é valido!!! Por favor digite um CPF valido", message.From)
    }
    await userRepository.updateStep(
      {
        cpf: message.Body,
        step: MessageStepEnum.CEP_STEP,
      },
      message.WaId
    );

    await sendMessageService.sendMenssage("Agora me informe o seu CEP", message.From);
  }
}
