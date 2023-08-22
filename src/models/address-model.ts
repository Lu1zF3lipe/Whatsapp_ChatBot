export class Address {
  cep?:  string;
  logradouro?:  string;
  complemento?: string;
  bairro?: string;
  localidade?:  string;
  uf?:  string;

  constructor(data: Object) {
    Object.assign(this, data);
  }
}