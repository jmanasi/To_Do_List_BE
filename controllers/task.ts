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

