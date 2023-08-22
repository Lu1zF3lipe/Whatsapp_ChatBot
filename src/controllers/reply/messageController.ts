import { Request, Response } from "express";
import { IReplyController } from "./reply-interface";
import { MessageContextService } from "../../services/message/message-context-service";

export class ReplyController implements IReplyController {
  private constructor() {}

  public static make(): IReplyController {
    return new ReplyController();
  }

  async handle(req: Request, res: Response): Promise<void> {
    await MessageContextService.handleMessage(req.body);
    res.status(200);
  }
}
