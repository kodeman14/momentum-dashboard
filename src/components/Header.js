import React from "react";
import { FcDoughnutChart, FcMenu } from "react-icons/fc";

function Header() {
  return (
    <div className="flex flex-row text-center justify-between bg-yellow-500 p-5">
      <span className="flex">
        <button>
          <FcDoughnutChart className="align-middle" />
        </button>
      </span>
      <h1 className="font-bold text-3xl mx-5">Patient Dashboard</h1>
      {/* TODO : add logo and menu icon */}
      <span className="flex">
        <button>
          <FcMenu className="align-middle" />
        </button>
      </span>
    </div>
  );
}

export default Header;
