//App
import React from "react";

//Component
import SignInForm from "../page components/SignInForm";

const SignIn = () => {
  return (
    <div className="si-img flex flex-col md:flex-row items-center justify-center w-full h-screen">
      <SignInForm />
    </div>
  );
};

export default SignIn;
