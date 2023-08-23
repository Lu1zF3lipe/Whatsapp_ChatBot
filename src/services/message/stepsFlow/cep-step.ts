import { MessageStepEnum } from "../../../enums/message-step-enum";
import { MessageModel } from "../../../models/message-model";
import { User } from "../../../models/user-model";
import { userRepository } from "../../../repositories/user/user.repository";
import { AddressService } from "../address-user-service";

export class UserCepStep {
  public static async handle(message: MessageModel, user: User): Promise<void> {

    const newUser = await AddressService.createAddress(message);
    if (newUser) {
        await userRepository.updateStep({
          step: MessageStepEnum.COMMAND_OPTION_STEP,
        },
        message.WaId
      );
      
      await AddressService.showAddress(newUser, message);
    }
  }
}
