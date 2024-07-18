"use client";

import React from "react";
import ScrollDownButton from "../components/ScrollDownButton";
import LogoSigninButton from "../components/LogoSigninButton";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

interface FormField {
  label: string;
  type: string;
}

const SignUp: React.FC = () => {
  const formFields = [{ label: "Enter your email address", type: "email" }];

  return (
    <div>
      <div className="background h-[100%]">
      <main>
        <LogoSigninButton />
        <div className="grid justify-center">
         <h1 className="text-white font-semibold text-center text-6xl mt-40">
          Endless excitement: Games,<br />challenges, and beyond!
         </h1>
         <h6 className="type text-white font-semi text-center text-2xl mt-4">
          Play anywhere, cancel anytime.<br />Enter your email to create your
          account and start gaming TODAY!!!
         </h6>
        </div>
        <div className="form-container flex mx-auto w-[50%] mt-5">
          <form className="form w-full">
            {formFields.map((field, index) => (
              <div className="mt-4" key={index}>
                <label></label>
                <input
                  className="formFields-signup p-3 rounded-md w-full"
                  type={field.type}
                  name={field.label.toLowerCase().replace(/\s/g, "")}
                  placeholder={field.label}
                />
              </div>
            ))}
          </form>
          <button type="submit"
            className="submit text-white p-2 ml-4 mt-4 border rounded-md w-[40%]">
            Get Started
          </button>
        </div>
        <ScrollDownButton />
      </main>
      </div>
      <Contents />
      <Footer />
    </div>
  );
};

export default SignUp;
