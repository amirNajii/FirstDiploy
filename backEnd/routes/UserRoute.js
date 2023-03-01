import express from 'express';
import { DeleteUser, getOneUser, getUsers, PostUser, UpdateUser } from '../controllers/UserController.js';

const router=express.Router();

router.get('/users',getUsers)

router.post('/users',PostUser)

router.get('/users/:id',getOneUser)

router.patch('/users/:id',UpdateUser)

router.delete('/users/:id',DeleteUser)


export default router;