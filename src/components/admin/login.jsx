import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setData } from "../../redux/dataSlice";



import logo from "../../../public/Images/logo.jpg";
import { useSignInMutation, useVerifyTokenMutation } from "../../redux/api";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signIn, { isLoading, error: apiError }] = useSignInMutation();

  const [loginError, setLoginError] = useState("");
  const [verifyToken] = useVerifyTokenMutation();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

      
  const handleSignIn = async (formData) => {
    try {
      const { email, password } = formData;
      const userData = await signIn({ email, password }).unwrap();
      const someString = "Hello, Redux!";
      if (userData.statusCode === 200 && userData.token) {
        console.log("Token from signIn:", userData.token);
  
        const verificationResponse = await verifyToken(userData.token).unwrap();
        console.log("Response from verifyToken:", verificationResponse.statusCode);
        
        if (verificationResponse.statusCode === 200) {
          dispatch(setData(someString));
   
          console.log("hi");
          let redirectTo = verificationResponse.value.role.role_name === "admin" ? "/dashboard" : "/employDashboard";
          navigate(redirectTo);
        } else {
          setLoginError("Token verification failed. Please try again.");
        }
      } else {
        setLoginError("Invalid login credentials. Please try again.");
      }
    } catch (err) {
      console.error("Error during sign in or token verification:", err);
      setLoginError(err.data?.message || "An error occurred during login.");
    }
  
  };
  return (
    <div className=" min-h-screen bg-teal-900">
      <div className="h-full  ">
        <nav className="bg-slate-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                className="h-8 mr-3 rounded-xl"
                alt="FireFlyTime Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FireFlyTime
              </span>
            </a>
          </div>
        </nav>

        {/* Login Div */}

        <div className="flex flex-col w-100 ">
          <div className="flex self-center">
            <div className="bg-slate-300 p-8 rounded-lg shadow-md w-96 mt-20">
              <h2 className="text-2xl font-serif text-center font-semibold text-gray-800 mb-4">
                Login
              </h2>
              <form onSubmit={handleSubmit(handleSignIn)}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    placeholder="Enter your email"
                    type="email" // Use type="email" for proper validation
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <p className="text-red-500">{errors.email?.message}</p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length is 4",
                      },
                    })}
                    placeholder="Enter your password"
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <p className="text-red-500">{errors.password?.message}</p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-darkBlue hover:bg-blue text-white p-2 rounded hover:bg-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>

                {loginError && <p className="text-red-500">{loginError}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
