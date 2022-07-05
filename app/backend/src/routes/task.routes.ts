import { Router } from 'express';
import TaskController from '../controllers/Task.controller';

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.get('/', taskController.getAll);
taskRoutes.post('/', taskController.createNewTask);
taskRoutes.get('/category/:id', taskController.getTasksCategory);
taskRoutes.get('/completed', taskController.taskCompleted);
taskRoutes.get('/ontrack', taskController.taskOnTrack);
taskRoutes.get('/pending', taskController.taskPending);
taskRoutes.put('/:id', taskController.update);
taskRoutes.delete('/:id', taskController.delete);

export default taskRoutes;