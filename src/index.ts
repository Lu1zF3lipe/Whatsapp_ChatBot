import "dotenv/config";
import { prisma } from "./db";
import { StartTunnel } from "./tunnel";
import express from "express";
import { routes } from "./routes";
import { MessageContextService } from "./services/message/message-context-service";
import { MessageStepEnum } from "./enums/message-step-enum";
import { FirstStepMessage } from "./services/message/first-step";

MessageContextService.listen(
  MessageStepEnum.FIRST_STEP,
  FirstStepMessage.handle
);

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

async function main() {
  await prisma.$connect();
  app.listen(3000, () => {
    console.log("aplicaçao rodando");
    StartTunnel();
  });
}

main();
