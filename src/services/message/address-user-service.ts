import { Address } from "../../models/address-model"
import { MessageModel } from "../../models/message-model"
import { User } from "../../models/user-model"
import { userRepository } from "../../repositories/user/user.repository"
import { consultCEP } from "../../utils/consultCEP"
import { sendMessageService } from "./send-message-service"

export class AddressService {
  public static async createAddress(message: MessageModel): Promise<User | undefined> {
    const cep = message.Body;
    const address = await consultCEP(cep);

    if (!address) {
      await sendMessageService.sendMenssage("o CEP informado nao é valido!!! Por favor digite um CEP valido", message.From);
      return;
    }

    return userRepository.includeAddress(message.WaId, address);
  }

  public static async showAddress (user: User, message: MessageModel){
    await sendMessageService.sendMenssage(
      `Seu endereço é:\n\nrua: ${user.address.logradouro}\nbairro: ${user.address.bairro}\ncidade: ${user.address.localidade}\nUF: ${user.address.uf}  `,
      message.From
    );
  }
}