module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let logInForm = (request, response) => {
    response.render("loginAndSignUp");
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    logInForm: logInForm,
  };
};
