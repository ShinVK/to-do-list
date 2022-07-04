import { Model, STRING, INTEGER } from 'sequelize';
import configDb from '.';


  class User extends Model {
    public id?: number;
    public name: string;
    public email: string;
    public password: string;
  }


  User.init({
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
  }, {
      underscored: true,
      sequelize: configDb,
      modelName: 'Users',
      timestamps: false,
    },);

export default User;