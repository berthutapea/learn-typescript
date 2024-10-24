import { User } from "@prisma/client";
import { Request } from "express";

export interface UserRequest extends Request {
  user?: User;
}
