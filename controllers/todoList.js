module.exports = (db) => {
  var sha256 = require("js-sha256");
  const SALT = "project2";
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let todoListCallback = (request, response) => {
    const whenDoneInModel = (error, result) => {
      console.log("FFFRROOOMMM CONTROLLER");
      console.log(result);
      if (result === null) {
        response.send("No such user! Please register for an account");
      } else if (result[0].name === request.body.username) {
        let reqPassword = sha256(request.body.password);
        if (reqPassword === result[0].password) {
          let user_id = result[0].id;
          var hashedCookie = sha256(SALT + user_id);
          response.cookie("LoginCookie", hashedCookie);
          response.cookie("LoginCookie2", user_id);
          const whenDoneInModel1 = (err, result) => {
            if (result === null) {
              const data = {
                username: request.body.username,
                user_id: request.cookies["LoginCookie2"],
              };
              //   console.log(data.user_id);
              response.render("noTodo", data);
            } else {
              const data = {
                userTodoList: result,
                username: result[0].name,
              };
              response.render("todoList", data);
            }
          };
          const values = user_id;
          db.todoListModel.userTodoList(values, whenDoneInModel1);
        } else {
          response.send("Incorrect Password");
        }
      } else {
        response.send("Hello");
      }
    };
    console.log(request.body.username);
    db.todoListModel.userLoggedIn(request.body.username, whenDoneInModel);
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    todoListCallback: todoListCallback,
  };
};
