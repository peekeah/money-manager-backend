const express = require("express");
const { getExpenditure, createExpenditure, deleteExpenditure, getExpenditures, updateExpenditure, filterExpenditure } = require("../module/expenditureModule");
const router = express.Router();

router.get("/", getExpenditures);
router.get("/:id", getExpenditure);
router.post("/create", createExpenditure);
router.delete("/delete/:id", deleteExpenditure);
router.put("/update/:id", updateExpenditure);
router.post("/filter", filterExpenditure);

module.exports = router;
