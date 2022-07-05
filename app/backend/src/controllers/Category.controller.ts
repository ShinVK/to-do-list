import { NextFunction, Request, Response } from 'express';
import CategoryService from '../services/Category.service';

export default class CategoryController {
  constructor(private categoryService = new CategoryService()) {}

  public createNewCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;
      const result = await this.categoryService.createNewCategory(name);
      return res.status(201).json(result);
    } catch (e){
      next(e)
    }
  }

  public showAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.categoryService.showCategories();
      return res.status(200).json(result);
    } catch (e){
      next(e)
    }
  }

  public deleteCategory  = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.categoryService.deleteCategory(id);
      return res.status(200).json({message: 'categoria deletada'});
    } catch (e){
      next(e)
    }
  }
}