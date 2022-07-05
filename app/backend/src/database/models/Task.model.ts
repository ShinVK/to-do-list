import { Model, STRING, INTEGER, DATE } from 'sequelize';
import configDb from '.';
import Category from './Category.model';
import Status from './Status.model';


class Task extends Model {
  public id!: number;
  public name: string;
  public statusId: string;
  public categoryId: string;
  public created: Date;
  public updated: Date;
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
  created: {
    type: DATE,
    allowNull: false,
  },
  updated: {
    type: DATE,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: configDb,
  modelName: 'tasks',
  timestamps: false,
},);

Task.belongsTo(Category, { foreignKey: 'category_id', as: 'categoria'});
Task.belongsTo(Status, { foreignKey: 'status_id', as: 'status'});

Category.hasMany(Task, { foreignKey: 'category_id', as: 'categoria'});
Status.hasMany(Task, {})

export default Task;