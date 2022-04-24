const mongo = require('../shared/connect');
const { ObjectId } = require('mongodb');

module.exports.getExpenditure = async (req, res, next) => {
    try {
        const data = await mongo.db.collection('expenditure').find().toArray();
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.createExpenditure = async (req, res, next) => {
    try {
        const data = await mongo.db.collection("expenditure").insertOne({
            amount: req.body.amount,
            category: req.body.category,
            description: req.body.description,
            source: req.body.source,
            posting_date: new Date(req.body.posting_date)        
        });
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.deleteExpenditure = async (req, res, next) => {
    try {
        const data = await mongo.db.collection('expenditure').deleteOne({_id: ObjectId(req.params.id)});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}