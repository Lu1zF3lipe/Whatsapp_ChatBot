import  axios  from "axios"
import { Address } from "../models/address-model"

export async function consultCEP(cep: string): Promise<Address | undefined> {
  const response = await axios.get<Address>(`https://viacep.com.br/ws/${cep}/json/`, {
    validateStatus: () => true
  })

  if (response.status === 200) {
    return response.data;
  }
  
}