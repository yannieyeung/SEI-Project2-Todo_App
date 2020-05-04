module.exports = (db) => {
  let signOutPage = (request, response) => {
    response.clearCookie("LoginCookie");
    response.clearCookie("LoginCookie2");
    response.render("signout");
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signOutPage: signOutPage,
  };
};
