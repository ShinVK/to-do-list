import { Model, STRING, INTEGER } from 'sequelize';
import configDb from '.';
import Category from './Category.model';
import Status from './Status.model';


class Task extends Model {
  public id!: number;
  public name: string;
  public statusId: string;
  public categoryId: string;
}


Task.init({
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
  statusId: {
    type: STRING,
    allowNull: false,
  },
  categoryId: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: configDb,
  modelName: 'tasks',
  timestamps: true,
},);

Task.belongsTo(Category, { foreignKey: 'category_id', as: 'categoria'});
Task.belongsTo(Status, { foreignKey: 'status_id', as: 'status'});

Category.hasMany(Task, { foreignKey: 'category_id', as: 'categoria'});
Status.hasMany(Task, {foreignKey: 'status_id', as: 'status'})

export default Task;