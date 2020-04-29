var React = require("react");

class SignUpForm extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <div>
            <h4>Hello,</h4>
            <h2>{this.props.username}</h2>
            <p>Thank you for signing up!</p>

            <form action="/login" method="POST">
              <button>Log In</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = SignUpForm;
