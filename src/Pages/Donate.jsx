import React from "react";
import { FaCopy } from "react-icons/fa";
import qrCodeImage from "../assets/iskconqrcode.png";
import PaytmLogo from "../assets/paytmlogo.png";
import RazorpayLogo from "../assets/razorpay.png";
import RazorpayButton from "./RazorpayButton";

const Donate = () => {
  const upiId = "ISKCON.eazypay@icici";
  const accountNo = "019601009491";
  const ifscCode = "ICIC0000196";
  const accountName = "ISKCON";
  const razorPayLink = "https://rzp.io/l/iskcondhn";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <>
     <RazorpayButton/>
    </>
    // <div className="min-h-screen flex items-center justify-center dark:bg-gray-950">
    //   <div className="w-full sm:max-w-md p-8 shadow-md rounded-md">
    //     <h2 className="text-3xl font-semibold mb-4">Donate to Our Cause</h2>

    //     {/* QR Code */}
    //     <div className="mb-4">
    //       <h3 className="text-xl font-semibold mb-2">Scan QR Code</h3>
    //       <img src={qrCodeImage} alt="QR Code" className="w-full max-w-md" />
    //     </div>

    //     {/* UPI ID */}
    //     <div className="mb-4">
    //       <h3 className="text-xl font-semibold mb-2">UPI ID</h3>
    //       <div className="flex items-center space-x-2">
    //         <span>{upiId}</span>
    //         <button
    //           onClick={() => copyToClipboard(upiId)}
    //           className="text-blue-500 hover:underline"
    //         >
    //           <FaCopy />
    //         </button>
    //       </div>
    //     </div>

    //     {/* Account Number */}
    //     <div className="mb-4">
    //       <h3 className="text-xl font-semibold mb-2">Account Details</h3>
    //       <div className="">
    //         <div>
    //           {" "}
    //           <b>Account No: </b>
    //           <span></span>
    //           {accountNo}
    //           <button
    //             onClick={() => copyToClipboard(accountNo)}
    //             className="text-blue-500 hover:underline"
    //           >
    //             <FaCopy />
    //           </button>
    //         </div>
    //         <div>
    //           {" "}
    //           <b>IFSC code: </b>
    //           <span>
    //             {ifscCode}
    //             <button
    //               onClick={() => copyToClipboard(ifscCode)}
    //               className="text-blue-500 hover:underline"
    //             >
    //               <FaCopy />
    //             </button>
    //           </span>
    //         </div>
    //         <div>
    //           {" "}
    //           <b>Account name: </b>
    //           {accountName}
    //           <span>
    //             <button
    //               onClick={() => copyToClipboard(accountName)}
    //               className="text-blue-500 hover:underline"
    //             >
    //               <FaCopy />
    //             </button>
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Razorpay Donate Button */}
    //     <div>
    //       <h3 className="text-xl font-semibold mb-2">Donate via Razorpay</h3>
    //       <button>
    //         <a href={razorPayLink}>
    //           <img
    //             style={{ maxWidth: "190px" }}
    //             src={RazorpayLogo}
    //             alt=""
    //             target="_blank"
    //           />
    //         </a>
    //       </button>
    //     </div>

    //     <div>
    //       <h3 className="text-xl font-semibold mb-2">Donate via Paytm</h3>
    //       <button>
    //         <a
    //           href="https://securegw.paytm.in/link/paymentForm/95925/LL_565151442"
    //           target="_blank"
    //         >
    //           <img src={PaytmLogo} alt="" />
    //         </a>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Donate;
