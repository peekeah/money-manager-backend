const express = require('express');
const { getIncome, createIncome, deleteIncome, updateIncome, getIncomes, filterIncome } = require('../module/incomeModule');
const router = express.Router();

router.get('/', getIncomes);
router.get('/:id', getIncome);
router.post('/create', createIncome);
router.delete('/delete/:id', deleteIncome);
router.put('/update/:id', updateIncome);
router.post('/filter/', filterIncome);

module.exports = router;
