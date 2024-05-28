import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/dataSlice";
import { CgDanger } from "react-icons/cg";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

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
  const [showPassword, setShowPassword] = useState(false);

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
        console.log(
          "Response from verifyToken:",
          verificationResponse.statusCode
        );

        if (verificationResponse.statusCode === 200) {
          dispatch(setData(someString));

          console.log("hi");
          let redirectTo =
            verificationResponse.value.role.role_name === "admin"
              ? "/dashboard"
              : "/employDashboard";
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative">
      <div className="h-full">
        <div className="flex flex-col w-100 pt-10">
          <div className="flex self-center">
            <div className="bg-slate-300 p-10 rounded-lg  w-96 mt-20 shadow-[rgba(1,1,1,0.5)_1px_1px_4px_5px]">
              <div className="flex flex-row items-center justify-center">
                <div className="flex">
                  <img
                    src={logo}
                    className="h-10 w-10 mr-3 rounded-xl"
                    alt="FireFlyTime Logo"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-serif text-center font-semibold text-gray-800">
                    FireFly time
                  </h1>
                </div>
              </div>

              <h2 className="font-serif text-center text-gray-800 mt-4">
                Please enter username and password
              </h2>
              <form onSubmit={handleSubmit(handleSignIn)}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 p-2"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", { required: "Email is required "})}
                    placeholder="Enter your email"
                    type="email" // Use type="email" for proper validation
                    id="email"
                    name="email"
                    className={`block list-none w-full rounded-md border p-2 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 ${
                      errors.email ? "border-2 border-red-700" : ""
                    }`}
                  />
                  <div className="flex items-center text-sm font-medium">
                    {errors.email && (
                      <span className="text-red-700 inline-block mr-1">
                        <CgDanger />
                      </span>
                    )}
                    {errors.email && (
                      <span className="text-red-700 inline-block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 4,
                          message: "Minimum length is 4",
                        },
                      })}
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className={`block list-none w-full mt-1 rounded-md border p-2 border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 ${
                        errors.password ? "border-2 border-red-700" : ""
                      }`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 px-3 flex items-center"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <MdRemoveRedEye size={20} />
                      ) : (
                        <FaEyeSlash size={20} />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    {errors.password && (
                      <span className="text-red-700 inline-block mr-1">
                        <CgDanger />
                      </span>
                    )}
                    {errors.password && (
                      <span className="text-red-700 inline-block">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-900 hover:bg-teal-800 text-white p-2 mt-2 rounded hover:bg-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
                <div className="flex items-center mt-1 font-bold">
                  {loginError && (
                    <span className="text-red-700 inline-block mr-1">
                      <CgDanger />
                    </span>
                  )}
                  {loginError && (
                    <span className="text-red-700 inline-block text-bold">
                      {loginError}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
