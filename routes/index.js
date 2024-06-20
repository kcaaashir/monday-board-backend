import { Router } from "express";
import webhookRouter from "./webhooks.js"

const router = Router();

router.use('/webhook', webhookRouter);

export default router;

