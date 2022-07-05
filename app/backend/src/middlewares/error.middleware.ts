import { NextFunction, Request, Response } from 'express';
import ErrorBase from '../utils/ErrorBase';



export default function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof ErrorBase) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: 'erro interno' });
}
