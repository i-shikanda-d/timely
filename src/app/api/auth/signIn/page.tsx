import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center shadow-lg text-black w-full max-w-md rounded-lg overflow-hidden">
          <div className="w-full flex justify-center items-center bg-gray-100 py-8">
            <Image
              src="/Timely.png"
              alt="logo"
              width={100}
              height={100}
              className="py-4"
            />
          </div>
          <div className="bg-orange-500 w-full p-6">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl text-white py-4">Sign In</h1>
              <form className="flex flex-col w-full space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-white font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md p-2 outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-white font-medium">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full rounded-md p-2 outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-green-500 text-white font-medium px-4 py-2 hover:bg-green-600 transition"
                >
                  Sign In
                </button>
              </form>
              <div className="py-5 text-center font-medium text-white space-y-2">
                <a href="/auth/forgotPassword" className="hover:underline">
                  Forgot Password?
                </a>
                <p>Don't have an account?</p>
                <Link href="/auth/signUp" className="hover:underline">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
