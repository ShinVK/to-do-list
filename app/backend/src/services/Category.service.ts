import ErrorBase from '../utils/ErrorBase';
import Category from '../database/models/Category.model';
import ICategory from '../interfaces/ICategory';

export default class CategoryService {
  constructor(private model = Category) {}

  public createNewCategory = async (name: string): Promise<ICategory> => {
    const result = await Category.create({name})
    return result;
  }

  public showCategories = async () : Promise<ICategory[]> => {
    return await Category.findAll();
  }

  public findOneCategory = async (id:string) : Promise<ICategory> => {
    const result = await Category.findByPk(id);
    if (!result) throw new ErrorBase('Not found', 404);
    return result;
  }

  public deleteCategory = async (id: string) : Promise<void> => {
    const result = await Category.findByPk(id);
    if (!result) throw new ErrorBase('Not found', 404);

    await Category.destroy({where: { id }});
  }
}