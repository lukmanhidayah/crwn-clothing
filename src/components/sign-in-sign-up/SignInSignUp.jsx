import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import "./SignInSignUp.scss";
const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
