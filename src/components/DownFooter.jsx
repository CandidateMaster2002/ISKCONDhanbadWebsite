import React from "react";

const DownFooter = () => {
  return (
    <footer className="dark:bg-gray-950">
      <div className="container w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center ">
          Copyright © 2024 ISKCON Dhanbad. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a
              href="terms-and-conditions"
              className="hover:underline me-4 md:me-6"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="privacy-policy" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="refund-cancel" className="hover:underline me-4 md:me-6">
              Refund & Cancellation Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default DownFooter;
