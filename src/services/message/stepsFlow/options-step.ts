import { MessageStepEnum } from "../../../enums/message-step-enum";
import { MessageModel } from "../../../models/message-model";
import { User } from "../../../models/user-model";
import { userRepository } from "../../../repositories/user/user.repository";
import { sendMessageService } from "../send-message-service";

export class OptionsStep {
  public static async handle(message: MessageModel, user: User): Promise<void> {
    await userRepository.updateStep({
      step: MessageStepEnum.COMMAND_OPTION_STEP
    }, message.WaId);
    
    await sendMessageService.sendMenssage(
      `Escolha uma das opção abaixo:\n\n1) ver suas informações\n2) apagar cadastro\n3) ver endereço`,
      message.From
    );
  }
}
