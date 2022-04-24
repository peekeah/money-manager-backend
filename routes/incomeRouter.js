const express = require('express');
const { getIncome, createIncome, deleteIncome } = require('../module/incomeModule');
const router = express.Router();

router.get('/', getIncome);
router.post('/create', createIncome);
router.delete('/delete/:id', deleteIncome);

module.exports = router;
