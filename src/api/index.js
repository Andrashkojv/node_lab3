import { Router } from 'express';
import bookRouter from'./book';
import authorRouter from './author'
import identyRouter from './identy'

const apiRouter = new Router();

apiRouter.use('/book', bookRouter);
apiRouter.use('/author', authorRouter);
apiRouter.use('/identy', identyRouter);

export default apiRouter;