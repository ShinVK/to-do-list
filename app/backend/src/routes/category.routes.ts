import { Router } from 'express';
import CategoryController from '../controllers/Category.controller';

const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.post('/', categoryController.createNewCategory);
categoryRoutes.get('/', categoryController.showAll);
categoryRoutes.delete('/:id', categoryController.deleteCategory);

export default categoryRoutes;