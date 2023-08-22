import { Router } from "express";
import { ReplyController } from "../controllers/reply/messageController";

const routes = Router();

const replyController = ReplyController.make();

routes.post("/api/reply", replyController.handle.bind(replyController));

export { routes };
