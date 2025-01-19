"use client";

import React from "react";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-gradientLeft to-gradientRight">
      <footer className="flex flex-col items-center">
        <div className="pt-5">
          <SocialMedia size={35} />
        </div>
        <div className="flex text-white text-center p-5">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </div>
  );
}
