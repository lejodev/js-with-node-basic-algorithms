const express = require('express');
const router = express.Router();
const check = require('check-types');

router.get('/:type', (req, res) => {
    const type = req.params.type;
    if(check.number(type)){
        res.send("number");
    }
});

module.exports = router;
