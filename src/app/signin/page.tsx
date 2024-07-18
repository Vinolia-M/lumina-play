"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import VanillaTilt from 'vanilla-tilt';

interface FormField {
  label: string;
  type: string;
}

const SignIn: React.FC = () => {
  const router = useRouter(),
        cardRef = useRef<HTMLDivElement | null>(null),
        formFields = [
    { label: "Enter your email or phone number", type: "email" },
    { label: "Enter your password", type: "password" },
  ];

  const handleNavigationClick = (event: React.MouseEvent<HTMLButtonElement>, path: string) => {
    event.preventDefault();
    router.push(path);
  };

  useEffect(() => {
    const cardElements = cardRef.current;

    if (cardElements) {
      VanillaTilt.init(cardElements, {
        max: 15,
        perspective: 1500,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        glare: false,
        "max-glare": 0.2,
        scale: 1.01,
      });
    }
  }, []);

  return (
  <div>
    <div className="background h-[100vh]">
    <main className="grid justify-center">
        <p className="logo-animation absolute top-[3%] left-[8%] text-white text-4xl font-semibold">LuminaS-Play</p>
      <div className="sign-in-container" ref={cardRef}>
        <div className="background-signin">
          <h2 className="text-white text-2xl font-semibold">Sign In</h2>
          <form className="mt-8">
            {formFields.map((field, index) => (
              <div className="mt-4" key={index}>
                <label></label>
                <input className="formFields w-full p-3 rounded-md"
                  type={field.type}
                  name={field.label.toLowerCase().replace(/\s/g, "")}
                  placeholder={field.label} />
              </div>
            ))}
            <button type="submit" className="w-full bg-dustyBlue text-white p-2 mt-4 mb-4 rounded-md" onClick={(event) => handleNavigationClick(event, '/')}>Sign In</button>
            <button className="flex mx-auto text-white hover:underline cursor-pointer"
              onClick={(event) => handleNavigationClick(event, '/forgotpassword')}>Forgot password?
            </button>
            <label className="text-white flex items-center mt-6">
              <input type="checkbox" name="option1" className="checkbox mr-3 h-4 w-4" />Remember me
            </label>
            <p className="text-dustyBlue mt-4">New to WatchHub ?{" "}
              <button className="text-white hover:underline cursor-pointer" onClick={(event) => handleNavigationClick(event, '/signup')}>Sign up now</button>
            </p>
            <p className="text-sm mt-4 text-white">This page is protected by Google reCAPTCHA to<br />ensure you are not a bot.{" "}
              <button className="text-dustyBlue hover:underline">Learn more.</button>
            </p>
          </form>
        </div>
      </div>
    </main>
    </div>
  </div>
  );
}

export default SignIn;