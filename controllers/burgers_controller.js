const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
        console.log(hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], data => {
        res.json(data);
    });
});

router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.json(data);
        console.log(hbsObject);
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    burger.updateOne({ 
        devoured: req.body.devoured
        }, 
        condition,  data => {
        //res.json(data);
        
        res.end();
    });
    console.log(condition, req.body.burger_name);
});

module.exports = router;