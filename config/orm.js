const connection = require('./connection');

const orm = {
    selectAll: function(tableName, callBack) {
        let queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, (err, result) => {
            console.log(result);
            callBack(result);
        });
    },
    // insertOne: function(tableName, colVals, objVals, callBack) {
    //     let queryString = `INSERT INTO ${tableName} ${colVals} VALUES ${objVals}`;
    //     connection.query(queryString, (err, result) => {
    //         console.log(result);
    //         callBack(result);
    //     })
    // },
    updateOne: function() {

    }
}

module.exports = orm;