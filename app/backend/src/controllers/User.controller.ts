import { NextFunction, Request, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const result = await this.userService.createNewUser({name, email, password})
      return res.status(201).json(result);
    } catch (e){
      next(e)
    }
  }
}

