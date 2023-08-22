import { PrismaClient } from "@prisma/client";
import { User } from "../../models/user-model";
import { MessageModel } from "../../models/message-model";
import { prisma } from "../../db";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AddressUserDto } from "./dto/create-address.dto";
import { Address } from "../../models/address-model";

class UserRepository {
  constructor(private prisma: PrismaClient) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.prisma.users.create({
      data: createUserDto,
    });

    return new User(newUser);
  }

  async findUserbyPhone(phone: string): Promise<User | undefined> {
    const user = await this.prisma.users.findUnique({
      include: {
        address: true
      },
      where: {
        phone,
      },
    });

    return new User(user);
  }

  async updateStep(updateUserDto: UpdateUserDto, phone: string): Promise<User> {
    const updateStep = await this.prisma.users.update({
      where: {
        phone: phone,
      },
      data: updateUserDto,
    });

    return new User(updateStep);
  }

  async includeAddress ( phone: string , {
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  }: AddressUserDto): Promise<User> {
    const user = await this.prisma.users.update({
      data: {
        address: {
          upsert: {
            create: {
              cep,
              logradouro,
              bairro,
              localidade,
              uf
            },
            update: {
              cep,
              logradouro,
              bairro,
              localidade,
              uf
            },
            where: {
              user: {
                phone
              }
            }
          }
        }
      },
      include: {
        address: true
      },
      where: {
        phone,
      }
    })

    return new User(user);
  }

  async deleteUser(phone: string): Promise<void> {
    const updateStep = await this.prisma.users.delete({
      where: {
        
        phone: phone,
      },
    });
  }
}

export const userRepository = new UserRepository(prisma);
