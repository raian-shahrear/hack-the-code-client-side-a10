import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../Hooks/useTitle";

const SignUp = () => {
  useTitle("Register");
  const {
    createUser,
    updateUserInfo,
    verifyEmail,
    googleUser,
    githubUser,
    facebookUser,
    signOutUser,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isPassVisible, setISPassVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Create a user account
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const name = form?.name?.value;
    const image = form.image.files[0];
    const email = form?.email?.value;
    const password = form?.password?.value;

    // using Regex for email
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      setErrorMessage("Please set email in right format");
      setIsLoading(false);
      return;
    }
    // using Regex for password
    if (!/^(?=.*[A-Z])/.test(password)) {
      setErrorMessage("Password should have at least one capital letter");
      setIsLoading(false);
      return;
    }
    if (!/^(?=.*\d)/.test(password)) {
      setErrorMessage("Password should have at least one digit");
      setIsLoading(false);
      return;
    }
    if (!/^(?=.*[!#$%&@? "])/.test(password)) {
      setErrorMessage("Password should have at least one special characters");
      setIsLoading(false);
      return;
    }
    if (!/^(?=.{6,})/.test(password)) {
      setErrorMessage("Password should have at least 6 characters");
      setIsLoading(false);
      return;
    }
    setErrorMessage("");

    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData?.success) {
          // create user
          createUser(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              form.reset();
              updateUser(name, imgData?.data?.url);
              verifyUserEmail();
              setErrorMessage("");
              signOutUser();
              navigate("/login");
            })
            .catch((err) => {
              console.error(err);
              setErrorMessage(err.message);
              setIsLoading(false);
            });
        }
      });
  };

  // Update user information like Email & Password
  const updateUser = (name, imageURL) => {
    updateUserInfo(name, imageURL)
      .then(() => {
        console.log("name and image URL are added");
        setErrorMessage("");
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
        setIsLoading(false);
      });
  };

  // Verify email
  const verifyUserEmail = () => {
    verifyEmail()
      .then(() => {
        const agree = window.alert("Please check your email for verification!");
        if (!agree) {
          toast.success(
            "Account has been registered successfully! Please login again!",
            { autoClose: 2000 }
          );
        }
        setErrorMessage("");
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  };

  // Google user
  const handleGoogle = () => {
    googleUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErrorMessage("");
        navigate("/");
        toast.success(
          "Account has been registered successfully through Google!",
          { autoClose: 1500 }
        );
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  };
  // Facebook user
  const handleFacebook = () => {
    facebookUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErrorMessage("");
        navigate("/");
        toast.success(
          "Account has been registered successfully through Facebook!",
          { autoClose: 1500 }
        );
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  };
  // GitHub user
  const handleGitHub = () => {
    githubUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErrorMessage("");
        navigate("/");
        toast.success(
          "Account has been registered successfully through GitHub!",
          { autoClose: 1500 }
        );
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  };

  return (
    <div className="flex justify-center py-24">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Register an account
        </h2>
        <p className="text-sm text-center text-gray-400">
          Already have an account? Please{" "}
          <Link
            to="/login"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-gray-100 hover:underline"
          >
            Log In
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogle}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-blue-500"
          >
            <FcGoogle className="text-lg" />
            <p>Register with Google</p>
          </button>
          <button
            onClick={handleGitHub}
            aria-label="Login with GitHub"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-blue-500"
          >
            <FaGithub className="text-lg" />
            <p>Register with GitHub</p>
          </button>
          <button
            onClick={handleFacebook}
            aria-label="Login with Facebook"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-blue-500"
          >
            <FaFacebookF className="text-lg text-blue-500" />
            <p>Register with Facebook</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <div>
          {errorMessage && (
            <p className="text-sm text-red-500 mb-4 text-center">
              Error: {errorMessage}
            </p>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label for="uname" className="block text-sm">
                Full Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="uname"
                placeholder="first name / last name"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900"
                required
              />
            </div>
            <div className="space-y-2">
              <label for="image" className="block text-sm">
                Upload Photo <span className="text-error">*</span>
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900"
                required
              />
            </div>
            <div className="space-y-2">
              <label for="email" className="block text-sm">
                Email address <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="valid email"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900"
                required
              />
            </div>
            <div className="space-y-2">
              <label for="password" className="block text-sm">
                Password <span className="text-error">*</span>
              </label>
              <div className="relative">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="******"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900"
                  required
                />
                <div
                  onClick={() => setISPassVisible(!isPassVisible)}
                  className="absolute bottom-3.5 right-2 text-lg text-gray-900"
                >
                  {isPassVisible ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <p className="text-gray-500 font-semibold">
                <small>
                  [password: at least 1 uppercase, 1 number, 1 special character
                  and 6 letters long]
                </small>
              </p>
            </div>
            <div>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                value="agree-terms"
              />
              <label for="terms" className="text-sm ml-2">
                Agree with our Term & Conditions?
              </label>
            </div>
          </div>
          <div className="relative">
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 hover:bg-blue-400 disabled:bg-blue-500 text-gray-900"
            >
              Sign Up
            </button>
            {isLoading && (
              <div className="absolute bottom-2 left-24 w-8 h-8 border-2 border-dashed rounded-full animate-spin border-gray-200"></div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
