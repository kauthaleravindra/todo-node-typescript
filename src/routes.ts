import express from 'express';
import task from './todo/todo.controller';

const router = express.Router();
router.use('/task', task);

export default router;