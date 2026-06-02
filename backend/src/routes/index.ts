import { Router } from 'express';
import authRoutes from './AuthRoutes';

const router = Router();

// router.use('rota', controller)
router.use('/auth', authRoutes);

export default router;
