import React, { useEffect } from "react";

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.razorpay.com/static/widget/subscription-button.js";
    script.setAttribute("data-subscription_button_id", "pl_JsrIQYADKfGc7s");
    script.setAttribute("data-button_theme", "rzp-outline-standard");
    script.async = true;

    const form = document.getElementById("razorpay-form");
    if (form) {
      form.appendChild(script);
    }

    return () => {
      if (form) {
        form.removeChild(script);
      }
    };
  }, []);
  return (
    <form id="razorpay-form">
      <script
        src="https://cdn.razorpay.com/static/widget/subscription-button.js"
        data-subscription_button_id="pl_JsrIQYADKfGc7s"
        data-button_theme="rzp-outline-standard"
        async
      ></script>
    </form>
  );
};

export default RazorpayButton;
