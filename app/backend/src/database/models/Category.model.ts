import { Model, STRING, INTEGER } from 'sequelize';
import configDb from '.';


  class Category extends Model {
    public id?: number;
    public name: string;
  }


  Category.init({
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
      modelName: 'categories',
      timestamps: false,
    },);

export default Category;