import { PrismaClient } from "@prisma/client";
import { User } from "../models/user-model";
import { MessageModel } from "../models/message-model";
import { prisma } from "../db";

class UserRepository {
  constructor(private prisma: PrismaClient) {}

  async createUser(message: MessageModel, step: string): Promise<User> {
    const newUser = await this.prisma.users.create({
      data: {
        name: message.Body,
        phone: message.From,
        step,
      }
    })

    return new User(newUser);
  }

  async findUserbyPhone(phone: string): Promise<User> {
    const user = await this.prisma.users.findUnique({
      where: {
        phone,
      },
    });
    return new User(user);
  }

  async updateStep(message: MessageModel, step: string): Promise<User>{
    const updateStep = await this.prisma.users.update({
      where: {
        phone: message.From,
      },
      data: {
        step,
      }
    });

    return new User(updateStep);
  }
}

export const userRepository = new UserRepository(prisma)