import { MessageStepEnum } from "../../../enums/message-step-enum";

export type CreateUserDto = {
  phone: string;
  step: MessageStepEnum;
};
