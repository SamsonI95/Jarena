//App
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Component
import { FcGoogle } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScaleLoader from "react-spinners/ScaleLoader";

//Firebase
import { auth, provider } from "../../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //Password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const notify = (message, type) => {
    toast[type](message, {
      position: "top-right", // Using the string for the position
      autoClose: 3000,
      transition: Bounce, // Applying the bounce transition
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      notify("Sign in successful!", "success");
      const user = userCredential.user;

      // Navigate to the home page after successful sign-in
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with email and password:", error);
      // Handle error (e.g., show a message to the user)
      setLoading(false);
      setError(error.message);
      notify(error.message, "error");
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setLoading(false);
      notify("Google sign in successful!", "success");

      // Navigate to the home page after successful sign-in
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle error (e.g., show a message to the user)
      setLoading(false);
      setError(error.message);
      notify(error.message, "error");
    }
  };

  const handleGoogleMobileSignIn = () => {
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    // Handle the sign-in result after redirect
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          // User successfully signed in with Google
          // You can access the user info with result.user
          console.log("Signed in as:", result.user);
        }
      })
      .catch((error) => {
        // Handle Errors here.
        console.error("Error during Google Sign-In with redirect:", error);
      });
  }, []);

  return (
    <div className="lg:scale-60 xlg:scale-100 ">
      <ToastContainer />
      <form
        onSubmit={handleSignIn}
        className="bg-white border border-none rounded-2xl w-[336px] h-[551px] lg:w-[807px] lg:h-[853px] py-[48.5px] lg:py-[97px] relative lg:-right-[30rem] xlg:-right-[15rem]"
      >
        <h3 className="text-[#5847D6] text-[18px] lg:text-[30px] text-center font-semibold mb-[53.53px] lg:mb-[105px]">
          Welcome back!
        </h3>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <section className="flex flex-col items-center space-y-4 lg:space-y-7">
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#424242] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] pl-5 lg:text-[14px]"
          />
          <div className="relative left-2">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#424242] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] pl-5 lg:text-[14px]"
            />
            <button
              type="button"
              className="relative -left-8"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </button>
          </div>
        </section>
        <section className="flex justify-center">
          <button
            type="submit"
            className={`bg-[#5847D6] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] mt-[24.84px] lg:mt-[49px] text-white ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? <ScaleLoader height={15} color="#fff" /> : "Sign In"}
          </button>
        </section>
        <section className="flex items-center justify-center my-[22px] lg:my-[40px]">
          <div className="dashed-before"></div>
          <h3 className="mx-3 lg:mx-10 text-lg">or</h3>
          <div className="dashed-after"></div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <h3 className="flex items-center mb-[22px] lg:my-[40px]">
            Don't have an account?{" "}
            <span className="pl-2 font-semibold">Sign up</span>
          </h3>
          <Link>
            <button
              onClick={handleGoogleSignIn}
              className="md:hidden flex items-center justify-center border border-[#424242] rounded-[10.14px] w-[288.93px] h-[35px]"
            >
              <FcGoogle className="mr-[10px]" />
              <h3 className="flex items-center">Sign in with google</h3>
            </button>
            <button
              onClick={handleGoogleSignIn}
              className={`text-[] flex items-center justify-center border border-[#424242] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <ScaleLoader height={15} color="#424242" />
              ) : (
                <>
                  <FcGoogle className="mr-[10px]" />
                  <h3 className="flex items-center">Sign in with Google</h3>
                </>
              )}
            </button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default SignInForm;
