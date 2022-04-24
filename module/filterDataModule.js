const mongo = require('../shared/connect');

module.exports.filterData = async (req, res, next) => {
    // console.log('hello from filterData');
    try {
        const data = await mongo.db.collection('income')
        .find({$and:[{date: {$gte: new Date(req.body.from)}}, {date: {$lte: new Date(req.body.to)}}]}).toArray();
        // const data = await mongo.db.collection('income')
        // .find({$and:[{date: {$gte: new Date("2018-02-18")}}, {date: {$lte: new Date("2019-05-18")}}]}).toArray();
        res.send(data);
        console.log(data);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}