import express from 'express';
import itemRoutes from './routes/itemRoutes';
import slackRoutes from './routes/slackRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/slack', slackRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
