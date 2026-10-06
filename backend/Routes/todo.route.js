import express from 'express';
import { createList, deleteList, getList } from '../controllers/list.controller.js';

const router = express.Router();
router.get('/',getList);
router.post('/',createList);
router.delete('/',deleteList);

export default router;