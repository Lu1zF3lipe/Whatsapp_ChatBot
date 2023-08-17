import { Request, Response } from "express";

export interface IReplyController {
    handle(req: Request, res: Response): Promise<void>;
}