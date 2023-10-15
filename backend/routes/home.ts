import express from 'express';

//Controllers
import { index } from '../controllers/Home';

const router = express.Router();

router.get('/', index);

export default router;