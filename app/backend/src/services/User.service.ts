import IUser from '../interfaces/Iuser';
import User from '../database/models/User.model';

export default class UserService {
  constructor(private model = User) {}

  public createNewUser = async (user: IUser) => {
    const result = await User.create(user)
    return result;
  }
}