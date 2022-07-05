import { Model, STRING, INTEGER, DATE } from 'sequelize';
import configDb from '.';
import Category from './Category.model';
import Status from './Status.model';


class Task extends Model {
  public id!: number;
  public name: string;
  public statusId: number;
  public categoryId: number;
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
    type: INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: INTEGER,
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
Status.hasMany(Task, { foreignKey: 'status_id', as: 'status'})

export default Task;