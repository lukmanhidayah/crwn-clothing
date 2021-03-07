import { useState } from "react";
import CustomButton from "../../custom-button/CustomButton";
import FormInput from "../../form-input/FormInput";
import { auth, SignInWithGoogle } from "../../../firebase/firebase.utils";

import "./SignIn.scss";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setUser({ email: "", password: "" });
    } catch (err) {
      console.log("Login Error", err.message);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
