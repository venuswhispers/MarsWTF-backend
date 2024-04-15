const express = require('express');
const Presales = require('../../models/Presales');

const router = express();

router.get('/:id', async (req, res) => {

    const data = await Presales.findOne({ stage: req.params.id });
    res.json({ status: "SUCCESS", data });
});
router.post('/', async (req, res) => {

    const { stage, total, price } = req.body;
    console.log(stage, total, price);

    await new Presales({ stage, total, price }).save();

    // const data = await Holders.find();

    // res.json({holders: data})
    res.json({ status: "SUCCESS" })
});
router.put('/', async (req, res) => {
    let { stage, sold, price } = req.body;
    console.log("update ---->", { stage, sold, price });
    await Presales.findOneAndUpdate({ stage }, { sold, price });
    res.json({ status: "SUCCESS" })
});

module.exports = router;
