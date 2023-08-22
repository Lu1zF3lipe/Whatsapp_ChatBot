import { MessageModel } from "../../../models/message-model";
import { User } from "../../../models/user-model";
import { userRepository } from "../../../repositories/user/user.repository";
import { AddressService } from "../address-user-service";
import { sendMessageService } from "../send-message-service";
import { InformationStep } from "./information-step";
import { OptionsStep } from "./options-step";

export class CommandOptionsStep {
  public static async handle(message: MessageModel, user: User): Promise<void> {

    if (message.Body === "1") {
      return InformationStep.handle(message, user);
    }

    if (message.Body === "2") {
      await userRepository.deleteUser(message.WaId);
      return sendMessageService.sendMenssage(
        "O seu cadastro foi deletado com sucesso! Para se cadastrar novamente envie qualquer mensagens!!",
        message.From
      );
    }

    if (message.Body === "3") {
      await AddressService.showAddress(user, message);
    } else {
      await OptionsStep.handle(message, user);
    }
  }
}
