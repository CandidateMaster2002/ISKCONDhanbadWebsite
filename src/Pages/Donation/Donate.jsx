import { FaCopy } from "react-icons/fa";
import qrCodeImage from "../../assets/iskconqrcode.png";
import PaytmLogo from "../../assets/paytmlogo.png";
import RazorpayLogo from "../../assets/razorpay.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LCMAlarnath from "../../assets/donation_page.jpg";
import {useEffect} from 'react'

const Donate = () => {
  const upiId = "ISKCON.eazypay@icici";
  const accountNo = "019601009491";
  const ifscCode = "ICIC0000196";
  const accountName = "ISKCON";
  const razorPayLink = "https://rzp.io/l/iskcondhn";

  const { t,i18n } = useTranslation();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  useEffect(() => {
  
    const language = localStorage.getItem('language') || 'en'; 
    i18n.changeLanguage(language);
  }, [i18n]);


  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-gray-950 
      " border>
      <div className="w-full sm:max-w-md p-8 shadow-md rounded-md flex flex-col items-center justify-center ">
      <img src={LCMAlarnath} alt="LCM Alarnath" className=" rounded-[50px]" />
        <h2 className="text-3xl font-semibold mt-4  ">
          {t("Donate to Our Cause")}
        </h2>

        <Link
          to="/donate-every-month"
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group mt-16"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white pl-2">
            {t("Donate Every Month")}
          </span>
        </Link>

        <div className="mt-16 mb-4 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Scan QR Code</h3>
          <div className="flex justify-center">
            <img src={qrCodeImage} alt="QR Code" className="max-w-280px" />
          </div>
        </div>

        <div className="mt-16   flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">UPI ID</h3>
          <div className="flex items-center space-x-2">
            <span>{upiId}</span>
            <button
              onClick={() => copyToClipboard(upiId)}
              className="text-blue-500 hover:underline"
            >
              <FaCopy />
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Account Details</h3>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <b>Account No: </b>
              <span>{accountNo}</span>
              <button
                onClick={() => copyToClipboard(accountNo)}
                className="text-blue-500 hover:underline"
              >
                <FaCopy />
              </button>
            </div>
            <div className="flex items-center">
              <b>IFSC code: </b>
              <span>{ifscCode}</span>
              <button
                onClick={() => copyToClipboard(ifscCode)}
                className="text-blue-500 hover:underline"
              >
                <FaCopy />
              </button>
            </div>
            <div className="flex items-center">
              <b>Account name: </b>
              <span>{accountName}</span>
              <button
                onClick={() => copyToClipboard(accountName)}
                className="text-blue-500 hover:underline"
              >
                <FaCopy />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-2">Donate via Razorpay</h3>
          <button>
            <a href={razorPayLink}>
              <img
                style={{ maxWidth: "190px" }}
                src={RazorpayLogo}
                alt=""
                target="_blank"
              />
            </a>
          </button>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Donate via Paytm</h3>
          <button>
            <a
              href="https://securegw.paytm.in/link/paymentForm/95925/LL_565151442"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PaytmLogo} alt="" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
