import express from 'express';
import userController from '../components/user/index';

const router = express.Router();
router.post('/register', [userController.registerUser])

export default router;
