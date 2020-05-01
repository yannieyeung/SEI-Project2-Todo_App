module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  // To check if user exists
  let userAddTodo = (username, callback) => {
    const values = [username];
    let query = "SELECT * FROM users WHERE id = $1";

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          console.log(queryResult.rows);

          console.log("moddddeeelll " + queryResult.rows.length);
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    userAddTodo,
  };
};
