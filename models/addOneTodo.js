module.exports = (dbPoolInstance) => {
  let addOneTodo = (values, callback) => {
    // const values = [username, password];
    let insertQuery = "INSERT INTO todo (user_id,todo_item) VALUES ($1,$2)";
    dbPoolInstance.query(insertQuery, values, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        if (result.rows.length > 0) {
          console.log(result.rows);
          callback(null, result.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    addOneTodo,
  };
};
