import InputField from "../../cms/components/fields/InputField.tsx";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "../../cms/components/checkbox/Checkbox.tsx";
import React from "react";
import VMRegister from "./VMRegister.ts";
import { ToastContainer } from "react-toastify";

export default function Register() {
  const { handleSubmitRegistration,formData, handleInputChange } = VMRegister();
  return (
    <div className="lex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
            <ToastContainer />

      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Daftar Akun
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Masukkan email dan kata sandi Anda untuk daftar!
        </p>
        {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Masuk dengan Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> atau </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div> */}
        {/* Firstname */}
        <form onSubmit={handleSubmitRegistration}>
          <InputField
            variant="auth"
            extra="mb-3"
            label="Nama Depan*"
            placeholder="namadepan"
            id="first_name"
            type="text"
            name="first_name"
            required
              // value={formData.name}
            onChange={handleInputChange}
          />
          {/* Lastname */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Nama Belakang*"
            placeholder="namabelakang"
            id="last_name"
            type="text"
            name="last_name"
            required
            onChange={handleInputChange}
          />
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="emailkamu@gmail.com"
            id="email"
            type="text"
            name="email"
            required
            onChange={handleInputChange}
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="password kamu"
            id="password"
            type="password"
            name="password"
            required
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Daftar
          </button>
        </form>

        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Sudah terdaftar?
          </span>
          <a
            href="/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-1000 hover:text-brand-600 dark:text-white underline text-blue-600"
          >
            Masuk
          </a>
        </div>
      </div>
    </div>
  );
}
