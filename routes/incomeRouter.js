const express = require('express');
const { getIncome, createIncome } = require('../module/incomeModule');
const router = express.Router();

router.get('/', getIncome);
router.post('/create', createIncome);

module.exports = router;
