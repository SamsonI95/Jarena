//App
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Icon
import { FcGoogle } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//Firebase
import { auth, db, provider } from "../../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //Password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user info to Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: name,
        email: email,
        createdAt: serverTimestamp(),
      });
      console.log("User added successfully!");
      alert("User added successfully!");
      // Redirect to homepage
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message); // Set a state for error messages
      console.error("Error signing up:", error);
    }
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     const user = result.user;

  //     const usersRef = collection(db, "users");
  //     const userDoc = await getDoc(doc(usersRef, user.uid));

  //     if (!userDoc.exists()) {
  //       await setDoc(doc(usersRef, user.uid), {
  //         uid: user.uid,
  //         name: user.displayName,
  //         email: user.email,
  //         createdAt: serverTimestamp(),
  //       });
  //     }

  //     navigate("/home");
  //   } catch (error) {
  //     console.error("Error signing in with Google:", error);
  //     // Show error message to the user
  //   }
  // };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user already exists in Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        createdAt: serverTimestamp(),
      });

      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message); // Set a state for error messages
      console.error("Error signing in with Google:", error);
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
      <form
        onSubmit={handleSignUp}
        className="bg-white border border-none rounded-2xl w-[336px] h-[551px] lg:w-[807px] lg:h-[853px] py-[48.5px] lg:py-[97px] relative lg:-right-[30rem] xlg:-right-[15rem]"
      >
        <h3 className="text-[#5847D6] text-[18px] lg:text-[30px] text-center font-semibold mb-[53.53px] lg:mb-[105px]">
          Create an account
        </h3>
        <section className="flex flex-col items-center space-y-4 lg:space-y-7">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-[#424242] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] pl-5 lg:text-[14px]"
          />
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
          <button className="bg-[#5847D6] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] mt-[24.84px] lg:mt-[49px] text-white">
            Sign Up
          </button>
        </section>
        <section className="flex items-center justify-center my-[22px] lg:mt-[40px]">
          <div className="dashed-before"></div>
          <h3 className="mx-3 lg:mx-10 text-lg">or</h3>
          <div className="dashed-after"></div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <h3 className="flex items-center mb-[22px] lg:mb-[40px]">
            Already have an account?{" "}
            <span className="pl-2 font-semibold">Sign in</span>
          </h3>
          <Link>
            <button
              onClick={handleGoogleMobileSignIn}
              className="md:hidden flex items-center justify-center border border-[#424242] rounded-[10.14px] w-[288.93px] h-[35px]"
            >
              <FcGoogle className="mr-[10px]" />
              <h3 className="flex items-center">Sign in with google</h3>
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="hidden md:flex items-center justify-center border border-[#424242] lg:rounded-[20px] lg:w-[570px] lg:h-[49px]"
            >
              <FcGoogle className="mr-[10px]" />
              <h3 className="flex items-center">Sign in with google</h3>
            </button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default SignUpForm;
