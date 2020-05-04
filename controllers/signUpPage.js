module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let signUpPageForm = (req, res) => {
    // res.render("signUpForm");
    res.render("loginAndSignUp");
  };
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signUpPageForm: signUpPageForm,
  };
};
