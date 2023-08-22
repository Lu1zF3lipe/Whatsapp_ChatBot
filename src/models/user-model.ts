import { address } from "@prisma/client";
import { MessageStepEnum } from "../enums/message-step-enum";

export class User {
  id: string;

  name: string;

  cpf: string;

  phone: string;

  step: MessageStepEnum;

  address: address;

  created_at: Date;

  updated_at: Date;

  constructor(data: Object) {
    Object.assign(this, data);
  }
}
