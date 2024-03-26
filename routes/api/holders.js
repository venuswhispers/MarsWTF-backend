const express = require('express');
const Holders = require('../../models/Holders');

const router = express();

router.get('/', async (req, res) => {

    const data = await Holders.find();

    res.json({holders: data})
});

module.exports = router;
