import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";
import { BsPersonFillAdd } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";


function AddEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      Email: "",
      Password: "",
      city: "",
      address: "",
      role: {
        Fullstack: "",
        Designer: "",
        programer: "",
      },
    },
  });

  return (
    <div className="flex flex-col font-poppins    ">
      <div className="flex m-4 text-slate-950">
        <p className=" flex text-3xl t font-serif font-semibold ">
          <BsPersonFillAdd  />{""}
          <span className="ml-1">Add Employee</span>
        </p>
      </div>

      {/* Login Div */}

      <div className="m-3 rounded-lg flex  w-auto sm:w-auto border  border-1 border-gray-200  ">
        <div className=" p-2 m-2 rounded-lg shadow-md w-full">
          <h2 className=" text-start  text-2xl font-serif sm:text-start font-semibold text-gray-800 mb-4">
            Enter Employee Information{" "}
          </h2>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className=" w-full   "
          >
            <div className="flex flex-row sm:flex-wrap  sm:p-2 -mx-3 mb-6 ">
              <div className="w-full md:w-80 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  {...register("firstName", {
                    required: "First Name is Required",
                  })}
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500${
                    errors.firstName ? "border-2 border-red-700" : ""
                  }`}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <div className="flex items-center text-sm font-medium">
                    {errors.firstName && (
                      <span className="text-red-700 inline-block mr-1">
                        <CgDanger />
                      </span>
                    )}
                    {errors.firstName && (
                      <span className="text-red-700 inline-block">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                
              </div>
              <div className="w-full md:w-80 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  {...register("lastName", {
                    required: "Last Name is Required",
                  })}
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500${
                    errors.firstName ? "border-2 border-red-700" : ""
                  }`}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                 <div className="flex items-center text-sm font-medium">
                    {errors.lastName && (
                      <span className="text-red-700 inline-block mr-1">
                        <CgDanger />
                      </span>
                    )}
                    {errors.lastName && (
                      <span className="text-red-700 inline-block">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
              </div>
              <div className="w-full md:w-80 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  {...register("Email", {
                    required: "Email is Required",
                  })}
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500${
                    errors.Email ? "border-2 border-red-700" : ""
                  }`}
                  id="email"
                  type="text"
                  placeholder="Email"
                />
                 <div className="flex items-center text-sm font-medium">
                    {errors.Email && (
                      <span className="text-red-700 inline-block mr-1">
                        <CgDanger />
                      </span>
                    )}
                    {errors.Email && (
                      <span className="text-red-700 inline-block">
                        {errors.Email.message}
                      </span>
                    )}
                  </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-60 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 4,
                      message: "Min length is 4",
                    },
                  })}
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500${
                    errors.password ? "border-2 border-red-700" : ""
                  }`}
                  id="Password"
                  type="password"
                  placeholder="******************"
                />
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
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you like
                </p>
              </div>
            </div>
            <div className="flex flex-row sm:flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  City
                </label>
                <input
                  {...register("city", {
                    required: "Please Enter City",
                  })}
                  className={`appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500${
                    errors.city ? "border-2 border-red-700" : ""
                  }`}
                  id="city"
                  type="text"
                  placeholder="islamabad"
                />
                <div className="flex items-center text-sm font-medium">
                    {errors.city && (
                      <span className="text-red-700 inline-block mr-1">
                        <CgDanger />
                      </span>
                    )}
                    {errors.city && (
                      <span className="text-red-700 inline-block">
                        {errors.city.message}
                      </span>
                    )}
                  </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  {...register("addrees", {
                    required: "Enter Address",
                  })}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  placeholder="stree#1....."
                />
                <p>{errors.address?.message}</p>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="role"
                >
                  Role
                </label>
                <div className="relative">
                  <select
                    {...register("role", {
                      required: "Select Role",
                    })}
                    id="role"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${
                      errors.city ? "border-2 border-red-700" : ""
                    }`}
                  >
                    <option selected>Choose a Role</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                 
                  </select>
                  <div className="flex items-center text-sm font-medium">
                    {errors.role && (
                      <span className="text-red-700 inline-block mr-1">
                        <CgDanger />
                      </span>
                    )}
                    {errors.role && (
                      <span className="text-red-700 inline-block">
                        {errors.role.message}
                      </span>
                    )}
                  </div>                 
                </div>
              </div>
            </div>
              <div className="flex items-center justify-end w-full  px-5 mb-6 md:mb-0">
                <button
                  type="submit"
                  className="text-white mt-6 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Register
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
