module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let addOneTodoCallback = (request, response) => {
    const whenDoneInModel = (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        response.redirect("/todolist");
        response.send(result);
        // response.redirect("/todolist");
      }
    };
    const values = [request.body.user_id, request.body.todo_item];

    console.log(request.body.user_id);
    db.addOneTodoModel.addOneTodo(values, whenDoneInModel);
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    addOneTodoCallback: addOneTodoCallback,
  };
};
