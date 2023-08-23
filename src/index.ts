import "dotenv/config";
import "./services/message";
import { prisma } from "./db";
import express from "express";
import { routes } from "./routes/message.routes";

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
    console.log("aplicacao rodando");
  });
}

main();
