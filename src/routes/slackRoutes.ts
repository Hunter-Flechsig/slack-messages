import { Router } from 'express';
import { sendMessage } from '../controllers/slackController';

const router = Router();

router.get('/', sendMessage);

export default router;
