import { MessageStepEnum } from "../../../enums/message-step-enum";
import { MessageModel } from "../../../models/message-model";
import { User } from "../../../models/user-model";
import { userRepository } from "../../../repositories/user/user.repository";
import { sendMessageService } from "../send-message-service";

export class InformationStep {
  public static async handle(message: MessageModel, user: User): Promise<void> {
    await sendMessageService.sendMenssage(
      `Nome: ${user.name}\nCPF: ${user.cpf}\nCEP: ${user.address.cep}`,
      message.From
    );
  }
}
