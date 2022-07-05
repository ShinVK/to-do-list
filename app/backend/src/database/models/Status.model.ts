import { Model, STRING, INTEGER } from 'sequelize';
import configDb from '.';


  class Status extends Model {
    public id!: number;
    public name: string;
  }


  Status.init({
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    }
  }, {
      underscored: true,
      sequelize: configDb,
      modelName: 'status',
      timestamps: false,
    },);

export default Status;