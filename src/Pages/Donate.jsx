// import React from "react";

// const Donate = () => {
//   return (
//     <>
//       <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row' }}>
//   <form>
//     <a
//       href="https://securegw.paytm.in/link/paymentForm/95925/LL_565151442"
//       target="_blank"
//       rel="im-checkout"
//       data-behaviour="remote"
//       data-style="light"
//       data-text="Donate with Paytm"
//       style={{
//         borderRadius: '2px',
//         display: 'inline-block',
//         border: '1px solid #e6ebf3',
//         padding: '0 41px',
//         color: '#182233',
//         fontSize: '16px',
//         textDecoration: 'none',
//         fontFamily: "'Nunito Sans', sans-serif",
//         height: '56px',
//         lineHeight: '56px',
//         background: '#f6f8fc',
//       }}
//     >
//       <span>Donate with</span>
//       <img style={{ marginLeft: '6px', verticalAlign: 'sub', width: '74px' }} src="https://staticgw.paytm.in/1.4/plogo/paytmlogo-coloured.png" alt="Paytm Logo" />
//     </a>
//   </form>
// </div>

//       <div
//         style={{
//           width: "70%",
//           marginLeft: "auto",
//           marginRight: "auto",
//           display: "flex",
//           flexDirection: "row",
//         }}
//       >
//         <form>
//           <script
//             src="https://cdn.razorpay.com/static/widget/subscription-button.js"
//             data-subscription_button_id="pl_JsrIQYADKfGc7s"
//             data-button_theme="rzp-outline-standard"
//             async=""
//           ></script>
//           <div className="razorpay-subscription-button">
//             <div className="subscription-button-widget">
//               <div>
//                 <label className="item-label">
//                   <input
//                     type="radio"
//                     name="plan_id"
//                     value="ppi_LDsDClVpAGNYtq"
//                     hidden=""
//                   />
//                   <div className="item">
//                     <div className="item-title">Nitya Seva</div>
//                     <div className="item-details">
//                       <span className="amount">
//                         <b>₹ 501.00</b>
//                       </span>
//                       <div className="item-details-description">
//                         <span className="plan-frequency">
//                           Frequency: monthly
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </label>
//                 {/* Repeat similar blocks for other radio options */}
//               </div>
//               <button
//                 type="submit"
//                 className="SubscriptionButton SubscriptionButton--light SubscriptionButton--rzpTheme SubscriptionButton--rzp-outline-standard"
//               >
//                 <svg
//                   width="18"
//                   height="20"
//                   viewBox="0 0 18 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z"
//                     fill="#fff"
//                   ></path>
//                   <path
//                     d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z"
//                     fill="#fff"
//                   ></path>
//                 </svg>
//                 <div className="SubscriptionButton-contents">
//                   <span className="SubscriptionButton-text">
//                     DonateEveryMonth
//                   </span>
//                 </div>
//               </button>
//               <div className="SubscriptionButton-rzpBranding">
//                 <a
//                   className="powered-by-razorpay"
//                   href="https://razorpay.com?ref=org-in-subscription-button-widget"
//                   target="_blank"
//                   tabIndex="-1"
//                 >
//                   <span>Powered by</span>
//                   <svg
//                     width="74"
//                     height="16"
//                     viewBox="0 0 74 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     {/* Razorpay branding SVG content */}
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* <h2>Donate Every Month</h2>
//       <br />
//       <div
//         style={{
//           width: "70%",
//           marginLeft: "auto",
//           marginRight: "auto",
//           display: "flex",
//           flexDirection: "row",
//         }}
//       >
//         <form>
//           <script
//             src="https://cdn.razorpay.com/static/widget/subscription-button.js"
//             data-subscription_button_id="pl_LDsMLdUfinGk0X"
//             data-button_theme="rzp-dark-standard"
//             async
//           ></script>
//         </form>
//       </div> */}
//     </>
//   );
// };

// export default Donate;


import { button } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react'
import RazorpaySubscriptionButton from '../components/RazorpaySubscriptionButton'

const Donate = () => {
  return (

  <>
  <h1>jddj</h1>
 <RazorpaySubscriptionButton/>
  </>
  
   
  )
}

export default Donate
