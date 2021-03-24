import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed z-10 flex items-center justify-center w-full h-20 bg-white border border-black rounded-t-lg bottom-1">
      <div className="grid w-full grid-cols-3">
        <div className="flex justify-center">
          <Link to="/clients" className="cursor-pointer">
            <h4>Clients</h4>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/calendar">
            <h4>Calendar</h4>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/account">
            <h4>Account</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
