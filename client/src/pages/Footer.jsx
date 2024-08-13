// src/pages/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#292928] text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Task and Time Management. All rights reserved.</p>
        
        <p>Email: <a href="mailto:your.email@example.com" className="underline">your.email@example.com</a></p>
        <p>Address: 1234 Task Street, Productivity City, Workstate, 56789</p>
      </div>
    </footer>
  );
};

export default Footer;
