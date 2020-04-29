module.exports = (db) => {
  var sha256 = require("js-sha256");

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let signUpVerified = (request, response) => {
    const whenDoneInModel = (error, result) => {
      if (result === null) {
        const whenDoneInModel1 = (err, result) => {
          const data = {
            username: request.body.username,
          };
          response.render("thankYouSignUp", data);
        };
        const values = [request.body.username, sha256(request.body.password)];
        db.signedUpModel.createUser(values, whenDoneInModel1);
      } else {
        response.send("Username exists. Please sign up with another username.");
      }
    };
    const newUsername = request.body.username;
    db.signedUpModel.checkUser(newUsername, whenDoneInModel);
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signUpVerified: signUpVerified,
  };
};
