// what to do when we recieve the request

var signup = function (event) {
  var responseHandler = function () {
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    showLogin.style.left = "-400px";
    showSignup.style.left = "5px";
    toggle.style.left = "110px";

    console.log("+++++++");
  };

  var request = new XMLHttpRequest();
  request.responseType = "json";
  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  // var url = "http://127.0.0.1:3000/signup";
  var url = "/signup";
  request.open("GET", url);

  // send the request
  request.send();
};

var login = function (event) {
  var responseHandler = function () {
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    showLogin.style.left = "5px";
    showSignup.style.left = "700px";
    toggle.style.left = "0";

    console.log("---------");
  };

  var request = new XMLHttpRequest();
  request.responseType = "json";
  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  var url = "http://127.0.0.1:3000/signup";
  request.open("GET", url);

  // send the request
  request.send();
};

var showLogin = document.querySelector(".login");
var showSignup = document.querySelector(".signup");
var signupButton = document.querySelector(".toggleSignup");
var loginButton = document.querySelector(".toggleLogin");
var toggle = document.querySelector("#top-btn");

signupButton.addEventListener("click", signup);
loginButton.addEventListener("click", login);
// }
