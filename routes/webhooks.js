import { Router } from "express";

import { createBoard, updateBoard } from '../controllers/webhook.js'

const router = Router();

router.post('/create-board', createBoard);

router.post('/update-board', updateBoard);

export default router;