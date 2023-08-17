import { MessageStepEnum } from "../enums/message-step-enum";

export class User {
  id: string;

  name: string;

  cpf: string;

  cep: string;

  phone: string;

  step: MessageStepEnum;

  created_at: Date;

  updated_at: Date;

  constructor(data: Object) {
    Object.assign(this, data);
  }
}
