import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            handleChange={this.handleChange}
            type="password"
            value={this.state.password}
            label="Password"
            required
          />

          <CustomButton type="submit" value="Submit form">
            Sign in
          </CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
