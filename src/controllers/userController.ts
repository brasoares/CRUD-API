import { Request, Response } from 'express';
import * as userModel from '../models/userModel';

export const getUsers = (req: Request, res: Response): void => {
  const users = userModel.getUsers();
  res.status(200).json(users);
};

export const getUserById = (req: Request, res: Response): void => {
  const userId = req.params.userId;
  const user = userModel.getUserById(userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const createUser = (req: Request, res: Response): void => {
  const userData = req.body;
  if (!userData.username || !userData.age || !userData.hobbies) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }
  const newUser = userModel.createUser(userData);
  res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response): void => {
  const userId = req.params.userId;
  const userData = req.body;
  const updatedUser = userModel.updateUser(userId, userData);
  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const deleteUser = (req: Request, res: Response): void => {
  const userId = req.params.userId;
  userModel.deleteUser(userId);
  res.status(204).end();
};
