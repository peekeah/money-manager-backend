const express = require('express');
const router = express.Router();
const { filterData } = require('../module/filterDataModule');

// router.get('/', filterData);
router.post('/', filterData);

module.exports = router;