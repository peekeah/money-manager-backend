const express = require("express");
const { getExpenditure, createExpenditure, deleteExpenditure, getExpenditures, updateExpenditure } = require("../module/expenditureModule");
const router = express.Router();

router.get("/", getExpenditures);
router.get("/:id", getExpenditure);
router.post("/create", createExpenditure);
router.delete("/delete/:id", deleteExpenditure);
router.put("/update/:id", updateExpenditure);

module.exports = router;
