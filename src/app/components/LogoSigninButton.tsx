'use client'

import React from "react";
import { useRouter } from "next/navigation";

const LogoSigninButton: React.FC = () => {
    const router = useRouter();

    return(
    <div className="flex flex-wrap justify-between items-center pt-8">
     <div className="logo">
        <p className="logo-animation text-white text-3xl cursor-pointer font-semibold" onClick={() => router.push("/")}>LuminaS-Play</p>
     </div>
     <button type="submit" className="text-white px-5 py-2 border rounded-md"
        onClick={() => router.push("/signin")}>
        Sign In
     </button>
    </div>
    );
}

export default LogoSigninButton;




