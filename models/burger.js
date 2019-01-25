const orm = require('../config/orm');

let burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },
    // insertOne: function(callBack) {
    //     orm.insertOne("burgers", )
    // }
}

module.exports = burger;
// orm.selectAll();

// orm.insertOne("Bacon Cheeseburger", false);

// orm.updateOne(2, "Avocado burger", true);

//export something.  Maybe put everything into an object called burger?