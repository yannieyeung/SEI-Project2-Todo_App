module.exports = (app, allModels) => {
  /*
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   */

  //=========================================
  //        Sign Up page
  //=========================================

  // require the controller

  const signUpPage = require("./controllers/signUpPage.js")(allModels);
  app.get("/signup", signUpPage.signUpPageForm);

  //=========================================
  //        After signing up
  //=========================================

  const signUpVerificationPage = require("./controllers/signUpVerified.js")(
    allModels
  );
  app.post("/signUpVerification", signUpVerificationPage.signUpVerified);

  //=========================================
  //        route for log in page
  //=========================================

  const loginForm = require("./controllers/logIn.js")(allModels);
  app.use("/login", loginForm.logInForm);

  //=========================================
  //        route for sign out
  //=========================================

  //   const signOut = require("./controllers/signout.js")(allModels);
  //   app.delete("/signout", signOut.signOutPage);

  //=========================================
  //      route for todo list
  //=========================================
  const todoListPage = require("./controllers/todoList.js")(allModels);
  app.post("/todolist", todoListPage.todoListCallback);

  const getTodoListPage = require("./controllers/getTodoList.js")(allModels);
  app.use("/todolist", getTodoListPage.getTodoListCallback);

  //=========================================
  //      route for delete todo list
  //=========================================

  const deleteTodoList = require("./controllers/deleteTodoList.js")(allModels);
  app.post("/deleteTodolist/:id", deleteTodoList.deleteTodoListCallback);

  //=========================================
  //      route for posting the todo form
  //=========================================

  const addOneTodo = require("./controllers/addOneTodo.js")(allModels);
  app.post("/addtodo/:id", addOneTodo.addOneTodoCallback);

  //=========================================
  //      route for add todo (form)
  //=========================================

  const addtodoPage = require("./controllers/addTodo.js")(allModels);
  app.use("/addtodo", addtodoPage.addTodoCallback);

  //=========================================
  //     route for showing all tweets
  //=========================================

  //   const alltweets = require("./controllers/alltweets.js")(allModels);
  //   app.get("/alltweets", alltweets.allTweetsCallback);
};
