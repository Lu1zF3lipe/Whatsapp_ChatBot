import { MessageStepEnum } from "../../enums/message-step-enum";
import { MessageModel } from "../../models/message-model";
import { sendMessageService } from "../../sendMessageService";

export class FirstStepMessage {
  public static async handle(
    message: MessageModel,
    userData: any
  ): Promise<MessageStepEnum | undefined> {
    await sendMessageService.sendMenssage(
      `você hablou: ${message.Body}`,
      message.From
    );

    return MessageStepEnum.CPF_STEP;
  }
}
