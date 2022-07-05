import Status from '../database/models/Status.model';
import Category from '../database/models/Category.model';
import Task from '../database/models/Task.model';
import ITask from '../interfaces/ITask';
import ErrorBase from '../utils/ErrorBase';

const optionsFindAll = {
  include: [
    {
      model: Category,
      as: 'categoria',
      attributes: {
        exclude: ['id']
      }
    },
    {
      model: Status,
      as: 'status',
      attributes: {
        exclude: ['id']
      }
    }
  ]
}

const includesOption = [
  {
    model: Category,
    as: 'categoria',
    attributes: {
      exclude: ['id']
    }
  },
  {
    model: Status,
    as: 'status',
    attributes: {
      exclude: ['id']
    }
  }
]

export default class TaskService {
  constructor(private model = Task, private category = Category, private status = Status) {}

  public getAllTasks = async (): Promise<ITask[]> => {
    const result = await Task.findAll({include: includesOption, attributes: {exclude: ['category_id', 'status_id']}});
    return result;
  }

  public createTask = async (task: ITask): Promise<ITask> => {
    const { statusId, categoryId } = task;
    const statusExist = await Status.findByPk(statusId);
    console.log(statusExist);
    const categoryExist = await Category.findByPk(categoryId);
    if (!categoryExist || !statusExist) throw new ErrorBase('not found', 404);
    const result = await Task.create(task);
    return result;
  }

  public filterTaskCategory = async (ctg: string):Promise<ITask[]> => {
    const categoryExist = await Category.findByPk(ctg);
    if (!categoryExist) throw new ErrorBase('not found', 404);
    const result = await Task.findAll({
      where: { categoryId: ctg},
      include: includesOption,
      attributes: {exclude: ['category_id', 'status_id']}
    });
    return result;
  }

  public taskCompleted = async ():Promise<ITask[]> => {
    const result = await Task.findAll({
      where: { statusId: 3},
      include: includesOption,
      attributes: {exclude: ['category_id', 'status_id']}
    });
    return result;
  }

  public taskOnTrack = async ():Promise<ITask[]> => {
    const result = await Task.findAll({
      where: { statusId: 2},
      include: includesOption,
      attributes: {exclude: ['category_id', 'status_id']}
    });
    return result;
  }

  public taskPending = async ():Promise<ITask[]> => {
    const result = await Task.findAll({
      where: { statusId: 1},
      include: includesOption,
      attributes: {exclude: ['category_id', 'status_id']}
    });
    return result;
  }
}