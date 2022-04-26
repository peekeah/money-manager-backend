const express = require('express');
const { getIncome, createIncome, deleteIncome, updateIncome, getIncomes } = require('../module/incomeModule');
const router = express.Router();

router.get('/', getIncomes);
router.get('/:id', getIncome);
router.post('/create', createIncome);
router.delete('/delete/:id', deleteIncome);
router.put('/update/:id', updateIncome);

module.exports = router;
