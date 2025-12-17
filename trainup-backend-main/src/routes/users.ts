import express from 'express';
import * as usersController from '../controllers/usersController';
import { protect } from '../middleware/auth';

const router = express.Router();

// Rotas públicas de usuários
router.post('/login', usersController.loginUser);
router.post('/', usersController.createUser); // Registrar novo usuário

// Rotas protegidas de usuários
router.get('/', protect, usersController.getAllUsers);
router.get('/:id', protect, usersController.getUserById);
router.put('/:id', protect, usersController.updateUser);

// Rotas de pagamentos (protegidas)
router.get('/:id/payments', protect, usersController.getUserPayments);
router.post('/:id/payments', protect, usersController.addPayment);

export default router;
