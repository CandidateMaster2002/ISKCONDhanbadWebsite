import React, { useEffect } from 'react';

<form><script src="https://cdn.razorpay.com/static/widget/subscription-button.js" data-subscription_button_id="pl_JsrIQYADKfGc7s" data-button_theme="rzp-outline-standard" async> </script> </form>

const RazorpaySubscriptionButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.razorpay.com/static/widget/subscription-button.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <form>
      <script
        src="https://cdn.razorpay.com/static/widget/subscription-button.js"
        data-subscription_button_id="pl_JsrIQYADKfGc7s"
        data-button_theme="rzp-outline-standard"
        async
      ></script>
    </form>
  );
};

export default RazorpaySubscriptionButton;




