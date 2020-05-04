var React = require("react");

class logInSignUpForm extends React.Component {
  render() {
    return (
      <html>
        <head />
        <script defer src="./loginSignUp-script.js" />
        <link rel="stylesheet" href="loginAndSignUp.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
        <body>
          <main>
            <div className="form-container">
              <div className="toggle-btn">
                <div id="top-btn"></div>
                <button type="button" className="toggle toggleLogin">
                  Log In
                </button>
                <button type="button" className="toggle toggleSignup">
                  Sign Up
                </button>
              </div>

              <div className="login">
                <h1>Login</h1>
                <form action="/todolist" method="POST">
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                  ></input>
                  <br />
                  <input
                    name="password"
                    type="text"
                    placeholder="Password"
                  ></input>
                  <br />
                  <button className="log-in-btn">Log in</button>
                </form>
              </div>
              <div className="signup">
                <h1>Sign Up Here</h1>
                <form action="/signUpVerification" method="POST">
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                  ></input>
                  <br />
                  <input
                    name="password"
                    type="text"
                    placeholder="Password"
                  ></input>
                  <br />
                  <button className="sign-up-btn">Sign up</button>
                </form>
              </div>
            </div>
          </main>
          <script></script>
        </body>
      </html>
    );
  }
}

module.exports = logInSignUpForm;
