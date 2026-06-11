import { Router } from 'express';
import authRoutes from './AuthRoutes';

const routes = Router();

// router.use('rota', controller)
routes.use('/auth', authRoutes);

export default routes
