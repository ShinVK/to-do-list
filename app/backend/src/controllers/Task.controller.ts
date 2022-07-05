import { NextFunction, Request, Response } from 'express';
import TaskService from '../services/Task.service';

export default class TaskController {
  constructor(private taskService = new TaskService()) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.taskService.getAllTasks();
      return res.status(200).json(result);
    } catch (e){
      next(e)
    }
  }

  public createNewTask  = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, statusId, categoryId } = req.body;
      const created = new Date();
      const updated = new Date();
      const result = await this.taskService.createTask({name, statusId, categoryId, created, updated})   
      return res.status(201).json(result);
    } catch (e){
      next(e)
    }
  }

  public getTasksCategory  = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.taskService.filterTaskCategory(id);
      return res.status(200).json(result);
    } catch (e){
      next(e)
    }
  }

  public taskCompleted  = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.taskService.taskCompleted();
      return res.status(200).json(result);
    } catch (e){
      next(e)
    }
  }

  public taskOnTrack  = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.taskService.taskOnTrack();
      return res.status(200).json(result);
    } catch (e){
      next(e)
    }
  }

  public taskPending  = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.taskService.taskPending();
      return res.status(200).json(result);
    } catch (e){
      next(e)
    }
  }
}