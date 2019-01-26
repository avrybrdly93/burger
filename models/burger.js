const orm = require('../config/orm');

let burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },
    insertOne: function(cols, vals, callBack) {
        orm.insertOne("burgers", cols, vals, function(req, res) {
            callBack(res);
        });
    },
    updateOne: function(updatedItem, condition, callBack) {
        orm.updateOne("burgers", updatedItem, condition, (req, res) => {
            callBack(res);
        })
    }
}

module.exports = burger;
// orm.selectAll();

// orm.insertOne("Bacon Cheeseburger", false);

// orm.updateOne(2, "Avocado burger", true);

//export something.  Maybe put everything into an object called burger?