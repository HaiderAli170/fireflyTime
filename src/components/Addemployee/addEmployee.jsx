import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";
import { BsPersonFillAdd } from "react-icons/bs";

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
    <div className=" border  sm:flex-col  sm:w-full">
      <div className="flex m-4 text-slate-950">
        <p className=" text-sm sm:flex  flex sm:text-3xl font-sans">
          <BsPersonFillAdd />
          Add Employee
        </p>
      </div>

      {/* Login Div */}

      <div className="m-0  sm:m-3 rounded-lg sm:flex w-48 sm:w-auto bg-slate-300   ">
        <div className="m-0 p-0 sm:p-2 sm:m-2 rounded-lg shadow-md sm:w-full">
          <h2 className=" text-center text-sm sm:text-2xl font-serif sm:text-start font-semibold text-gray-800 mb-4">
            Enter Employee Information{" "}
          </h2>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className=" sm:w-full   "
          >
            <div className="flex flex-wrap -mx-3 mb-6 ">
              <div className="w-full md:w-80 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="first-name"
                >
                  First Name
                </label>
                <input
                  {...register("firstName", {
                    required: "First Name is Required",
                  })}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <p>{errors.firstName?.message}</p>
              </div>
              <div className="w-full md:w-80 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="last-name"
                >
                  Last Name
                </label>
                <input
                  {...register("lastName", {
                    required: "Last Name is Required",
                  })}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                <p>{errors.lastName?.message}</p>
              </div>
              <div className="w-full md:w-80 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  {...register("Email", {
                    required: "Email is Required",
                  })}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
                <p>{errors.email?.message}</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-60 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="password"
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
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="Password"
                  type="password"
                  placeholder="******************"
                />
                <p>{errors.password?.message}</p>
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                  {...register("city", {
                    required: "Please Enter City",
                  })}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="city"
                  type="text"
                  placeholder="islamabad"
                />
                <p>{errors.city?.message}</p>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="address"
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
                  for="role"
                >
                  Role
                </label>
                <div className="relative">
                  <select
                    {...register("role", {
                      required: "Select Role",
                    })}
                    id="role"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a Role</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                 
                  </select>
                  <p>{errors.role?.message}</p>
                 
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <button
                  type="submit"
                  class="text-white mt-6 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
