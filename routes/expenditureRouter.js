const express = require("express");
const { getExpenditure, createExpenditure, deleteExpenditure } = require("../module/expenditureModule");
const router = express.Router();

router.get("/", getExpenditure);
router.post("/create", createExpenditure);
router.delete("/delete/:id", deleteExpenditure);

module.exports = router;
