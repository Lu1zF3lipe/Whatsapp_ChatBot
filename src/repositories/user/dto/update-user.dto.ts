import { MessageStepEnum } from "../../../enums/message-step-enum";

export type UpdateUserDto = {
  name?: string;
  cpf?: string;
  cep?: string;
  step?: MessageStepEnum;
};
