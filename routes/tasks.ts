import express, { Request, Response } from 'express';
import { Task } from '../types';
import * as taskController from '../controllers/task';
const router = express.Router();

router.get('/', taskController.getAllTasks);
router.post('/', taskController.addTask);
router.put('/', taskController.updateTask);
router.delete('/', taskController.deleteTask);
export default router;
