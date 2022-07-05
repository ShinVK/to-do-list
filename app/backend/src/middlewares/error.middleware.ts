import { NextFunction, Request, Response } from 'express';

class ErrorBase extends Error {
  constructor(msg: string, public statusCode: number) {
    super(msg);
  }
}


export default function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof ErrorBase) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: 'erro interno' });
}
