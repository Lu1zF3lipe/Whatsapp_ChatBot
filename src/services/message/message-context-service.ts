import { MessageStepEnum } from "../../enums/message-step-enum";
import { MessageModel } from "../../models/message-model";
import { User } from "../../models/user-model";
import { userRepository } from "../../repositories/user/user.repository";

type EventListener = (message: MessageModel, userData: User) => Promise<void>;

type Messagelistener = {
  [key: string]: EventListener | undefined;
};

export class MessageContextService {
  private static listeners: Messagelistener = {};

  public static async handleMessage(message: MessageModel): Promise<void> {
    if (!message.Body) return;

    const user = await userRepository.findUserbyPhone(message.WaId);
    const currentStep = user.step || MessageStepEnum.FIRST_MESSAGE_STEP;
    const listener = this.listeners[currentStep];

    if (!listener) return;

    await listener(message, user);
  }

  public static listen(event: MessageStepEnum, listener: EventListener): void {
    if (event in this.listeners) {
      throw new Error(`Event "${event}" already being listen`);
    }

    this.listeners[event] = listener;
  }
}
