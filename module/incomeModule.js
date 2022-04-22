const mongo = require('../shared/connect');

module.exports.getIncome = async (req, res, next) => {
    try {
        const data = await mongo.db.collection('income').find().toArray();
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.createIncome = async (req, res, next) => {
    try {
        const data = await mongo.db.collection("income").insertOne({
            date: new Date(req.body.date),
            amount: req.body.amount
        });
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
