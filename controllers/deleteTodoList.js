module.exports = (db) => {
  var sha256 = require("js-sha256");
  const SALT = "project2";
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let deleteTodoListCallback = (request, response) => {
    const whenDoneInModel = (error, result) => {
      if (error) {
        console.log(error);
      } else {
      }
    };
    const values = [request.params.id];
    console.log(values);
    db.deleteTodoModel.deleteTodo(values, whenDoneInModel);
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    deleteTodoListCallback: deleteTodoListCallback,
  };
};
