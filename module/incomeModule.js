const mongo = require('../shared/connect');
const { ObjectId } = require('mongodb');

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

module.exports.deleteIncome = async (req, res, next) => {
    try {
        const data = await mongo.db.collection('income').deleteOne({_id: ObjectId(req.params.id)});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}