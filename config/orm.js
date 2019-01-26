const connection = require('./connection');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    selectAll: function(tableName, callBack) {
        let queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, (err, result) => {
            // console.log(result);
            callBack(result);
        });
    },
    insertOne: function(tableName, colVals, objVals, callBack) {
        let numQuestions = printQuestionMarks(objVals.length);
        console.log(numQuestions);
        let queryString = `INSERT INTO ${tableName} (${colVals.toString()}) VALUES (${numQuestions})`;
        console.log(queryString);
        connection.query(queryString, objVals, (err, result) => {
            console.log(result);
            callBack(result);
        });
    },
    updateOne: function(tableName, updatedItem, condition, callBack) {
        let queryString = `UPDATE ${tableName} SET ${objToSql(updatedItem)} WHERE ${condition};`
        connection.query(queryString, (err, result) => {
            console.log(result);
            callBack(result);
        });
    }
}

module.exports = orm;