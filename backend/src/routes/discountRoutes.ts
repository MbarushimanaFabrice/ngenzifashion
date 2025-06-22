import { Router } from 'express';
import {
  createDiscount,
  getAllDiscounts,
  getActiveDiscounts,
  getDiscountById,
  updateDiscount,
  deleteDiscount
} from '../controllers/discountController';

const router = Router();

router.post('/', createDiscount);
router.get('/', getAllDiscounts);
router.get('/active/:shop_id', getActiveDiscounts);
router.get('/:id', getDiscountById);
router.put('/:id', updateDiscount);
router.delete('/:id', deleteDiscount);

export default router;
