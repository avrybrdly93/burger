const connection = require('./connection');

const orm = {
    selectAll: function(tableName, callBack) {
        let queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, function(err, result) {
            if(err) {
                console.log(err);
            }
            callBack(result);
        }) 
    },
    insertOne: function() {

    },
    updateOne: function() {

    }
}

module.exports = orm;