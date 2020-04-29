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
        } else {
          console.log("---------------");
          console.log(result);
          response.send(result);
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
