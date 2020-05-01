module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let addTodoCallback = (request, response) => {
    if (request.cookies["LoginCookie"] == null) {
      console.log(request.cookies["LoginCookie"]);
      //   response.status(403);
      response.send("You are not allowed");
    } else {
      whenDoneInModel = (err, result) => {
        if (err) {
          console.log(err);
        } else {
          const data = {
            username: result[0].name,
            user_id: result[0].id,
          };
          console.log("from addTodo.js controller" + data.user_id);
          response.render("todoForm", data);
        }
      };
      const values = request.cookies["LoginCookie2"];
      db.addTodoFormModel.userAddTodo(values, whenDoneInModel);
    }
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    addTodoCallback: addTodoCallback,
  };
};
