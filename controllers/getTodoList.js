module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let getTodoListCallback = (request, response) => {
    const whenDoneInModel = (error, result) => {
      if (error) {
        console.log(error);
      } else {
        if (request.cookies["LoginCookie"] == null) {
          console.log(request.cookies["LoginCookie"]);
          //   response.status(403);
          response.send("You are not allowed");
        } else if (result === null) {
          whenDoneInModel1 = (err, result) => {
            if (err) {
              console.log(err);
            } else {
              const data = {
                username: result[0].name,
                user_id: request.cookies["LoginCookie2"],
              };
              console.log(data.user_id);
              response.render("noTodo", data);
              //   console.log(result);
            }
          };
          const values = request.cookies["LoginCookie2"];
          db.getTodoListModel.getUser(values, whenDoneInModel1);
        } else {
          console.log("---------------");
          console.log(result);
          const data = {
            userTodoList: result,
            username: result[0].name,
          };
          response.render("todoList", data);
        }
      }
    };

    const values = request.cookies["LoginCookie2"];
    db.getTodoListModel.getUserTodoList(values, whenDoneInModel);
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    getTodoListCallback: getTodoListCallback,
  };
};
