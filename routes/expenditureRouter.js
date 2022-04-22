const express = require("express");
const { getExpenditure, createExpenditure } = require("../module/expenditureModule");
const router = express.Router();

router.get("/", getExpenditure);
router.post("/create", createExpenditure);

module.exports = router;
