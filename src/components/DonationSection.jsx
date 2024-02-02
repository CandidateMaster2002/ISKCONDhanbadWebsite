import React from "react";
import { Link } from "react-router-dom";
const DonationSection = () => {
  return (
    <div className="text-center mt-8 bg-red-50">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 animate__animated animate__fadeIn animate__delay-1s">
        <Link to="donate">
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-6 py-4 me-2 mb-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-4"
          >
            Make a Donation
          </button>
        </Link>
      </h1>

      <p className="text-lg font-bold animate__animated animate__fadeIn animate__delay-2s mb-8">
        “No matter small or big, Krishna sees your Heart, whether you want to
        serve him or not.”
      </p>
    </div>
  );
};

export default DonationSection;
