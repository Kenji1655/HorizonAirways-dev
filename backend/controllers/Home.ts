import { Request, Response } from "express";
const index = function (request: Request, response: Response) {
  response.send("teste");
};

export { index };
