const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })

});

module.exports = router;