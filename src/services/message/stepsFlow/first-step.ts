import { MessageStepEnum } from "../../../enums/message-step-enum";
import { MessageModel } from "../../../models/message-model";
import { userRepository } from "../../../repositories/user/user.repository";
import { sendMessageService } from "../send-message-service";

export class FirstStepMessage {
  public static async handle(message: MessageModel): Promise<void> {
    userRepository.createUser({
      phone: message.WaId,
      step: MessageStepEnum.USERNAME_STEP,
    });

    await sendMessageService.sendMenssage(
      "Olá, seja bem vindo!!!\npara continuar com o cadastro informe o seu nome completo",
      message.From
    );
  }
}
