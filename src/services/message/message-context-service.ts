import { MessageStepEnum } from "../../enums/message-step-enum";
import { MessageModel } from "../../models/message-model";
import { userRepository } from "../../repositories/user.repository";
import { IMessageContext } from "./message-context-interface";

type EventListener = (
  message: MessageModel,
  userData: any
) => Promise<string | undefined>;

type Messagelistener = {
  [key: string]: EventListener | undefined;
};

export class MessageContextService implements IMessageContext {
  private static listeners: Messagelistener = {};

  public static async handleMessage(message: MessageModel): Promise<void> {
    const userInfo = {};
    const currentState = MessageStepEnum.FIRST_STEP;
    const listener = this.listeners[currentState];

    if (!listener) return;

    const newState = await listener(message, userInfo);

    if (newState && newState !== currentState) {
      console.log("ALTERAÇÃO DE ESTADO", currentState, newState);
    }
  }

  public static listen(event: MessageStepEnum, listener: EventListener): void {
    if (event in this.listeners) {
      throw new Error(`Event "${event}" already being listen`);
    }

    this.listeners[event] = listener;
  }
}
