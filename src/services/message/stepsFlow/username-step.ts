import { MessageStepEnum } from "../../../enums/message-step-enum";
import { MessageModel } from "../../../models/message-model";
import { User } from "../../../models/user-model";
import { userRepository } from "../../../repositories/user/user.repository";
import { sendMessageService } from "../send-message-service";

export class UserNameStep {
  public static async handle(message: MessageModel, user: User): Promise<void> {
    await userRepository.updateStep(
      {
        name: message.Body,
        step: MessageStepEnum.CPF_STEP,
      },
      message.WaId
    );

    await sendMessageService.sendMenssage("Perfeito!! Agora informe o seu CPF sem pontos, traços ou espaços", message.From);
  }
}
