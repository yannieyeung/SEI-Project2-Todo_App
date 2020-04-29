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
  //      route for todo list (post)
  //=========================================
  const todoListPage = require("./controllers/todoList.js")(allModels);
  app.post("/todolist", todoListPage.todoListCallback);

  //=========================================
  //      route for new tweet (post)
  //=========================================

  //   const addedtweet = require("./controllers/addedtweet.js")(allModels);
  //   app.post("/addedtweet", addedtweet.addedtweetCallback);

  //=========================================
  //     route for showing all tweets
  //=========================================

  //   const alltweets = require("./controllers/alltweets.js")(allModels);
  //   app.get("/alltweets", alltweets.allTweetsCallback);
};
