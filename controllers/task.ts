import { Request, Response } from 'express';
import { Task } from '../types';

let tasks: Task[] = [];

export const getAllTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const addTask = (req: Request, res: Response) => {
    const { name, status } = req.body;
    const newTask: Task = {
      id: tasks.length + 1,
      name,
      status,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  };

  export const updateTask = (req: Request, res: Response) => {
    const id = parseInt(req.body.id);
    const { name, status } = req.body;
    const taskToUpdate = tasks.find(task => task.id === id);
    if (!taskToUpdate) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }
    taskToUpdate.name = name;
    taskToUpdate.status = status;
    res.json(taskToUpdate);
  };
  
  export const deleteTask = (req: Request, res: Response) => {
    
    const id = parseInt(req.body.id);
    tasks = tasks.filter(task => task.id !== id);
    res.status(201).json({success:'Task Deleted'});
  };