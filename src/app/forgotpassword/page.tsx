"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import GradientBackground from "../components/GradientBackground";
import LogoSigninButton from "../components/LogoSigninButton";
import VanillaTilt from 'vanilla-tilt';

interface FormField {
  label: string;
  type: string;
  name: string;
}

const ForgotPassword: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null),
        router = useRouter(),
       [selectedOption, setSelectedOption] = useState<string>("email"),
       [formFields, setFormFields] = useState<FormField[]>([
    { label: "Enter your email address", type: "email", name: "email" }
  ]),
       [buttonText, setButtonText] = useState<string>("Email me"),
       [infoText, setInfoText] = useState<string>(
    "We will send you an email with instructions on how to reset your password."
  );

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


  const handleOptionChange = (option: string) => {
    console.log(`Option changed to: ${option}`);  // Debugging log
    setSelectedOption(option);

    if (option === "email") {
      setFormFields([
        { label: "Enter your email address", type: "email", name: "email" }
      ]);
      setButtonText("Email me");
      setInfoText(
        "We will send you an email with instructions on how to reset your password."
      );
    } else if (option === "text") {
      setFormFields([
        { label: "Enter your phone number", type: "tel", name: "phone" },
        { label: "Select your country code", type: "select", name: "countryCode" }
      ]);
      setButtonText("Text me");
      setInfoText(
        "We will text you a verification code to reset your password. Message and data rates may apply."
      );
    }
  };

  return (
    <div>
      <div className="background h-[100vh]">
      <main >
        <LogoSigninButton />
        <div className="sign-in-container mx-auto w-[28%]" ref={cardRef}>
          <div className="background-signin">
            <h2 className="text-white text-3xl font-semibold">
              Update password, email or phone
            </h2>
            <p className="text-white text-l mt-3">
              How would you like to reset your password?
            </p>
            <label className="text-white flex items-center mt-2">
              <input
                type="radio"
                name="resetOption"
                className="mr-3 h-4 w-4"
                checked={selectedOption === "email"}
                onChange={() => handleOptionChange("email")}
              />
              Email
            </label>
            <label className="text-white flex items-center mt-2">
              <input
                type="radio"
                name="resetOption"
                className="mr-3 h-4 w-4"
                checked={selectedOption === "text"}
                onChange={() => handleOptionChange("text")}
              />
              Text Message
            </label>
            <p className="text-white text-l mt-3">{infoText}</p>
            <form className="mt-5">
              {formFields.map((field, index) => (
                <div className="mt-4" key={index}>
                  <label></label>
                  {field.type === "select" ? (
                    <select
                      className="formFields w-full p-3 rounded-md"
                      name={field.name}
                    >
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+91">+91 (IN)</option>
                      {/* Gonna add country codes */}
                    </select>
                  ) : (
                    <input
                      className="formFields w-full p-3 rounded-md"
                      type={field.type}
                      name={field.name}
                      placeholder={field.label}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-dustyBlue text-white p-2 mt-4 rounded-md"
              >
                {buttonText}
              </button>
              <p className="text-white mt-4 hover:underline cursor-pointer">
                <a href="#" onClick={() => router.push("/")}>
                  I dont remember my email or phone.
                </a>
              </p>
            </form>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default ForgotPassword;