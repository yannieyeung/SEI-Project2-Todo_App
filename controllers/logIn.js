module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let logInForm = (request, response) => {
    response.render("logInForm");
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
