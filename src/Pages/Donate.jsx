import React, { useEffect } from 'react';

const Donate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.dataset.payment_button_id = "pl_JslmbTJVwZeCst";
    document.forms[0].appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.forms[0].removeChild(script);
    };
  }, []);

  // Razorpay options
  const razorpayOptions = {
    key: 'YOUR_RAZORPAY_KEY',
    amount: 1000, // amount in the smallest currency unit (e.g., paise for INR)
    currency: 'INR',
    name: 'Your Company',
    description: 'Donation for Nitya Seva',
    image: 'your_logo_url',
    order_id: 'order_id_generated_by_your_backend',
    handler: function (response) {
      alert('Payment successful!');
    },
    prefill: {
      name: 'Your Name',
      email: 'your.email@example.com',
      contact: '9876543210',
    },
    notes: {
      address: 'Your Address',
    },
    theme: {
      color: '#F37254',
    },
    modal: {
      ondismiss: function () {
        // Handle modal close
      },
    },
    options: {
      subscription: {
        default: {
          name: 'Nitya Seva', // Set the title of every option as "Nitya Seva"
          description: 'Monthly Donation', // Set the frequency description as "Monthly"
        },
      },
    },
  };

  useEffect(() => {
    if (window.Razorpay) {
      const rzp = new window.Razorpay(razorpayOptions);
      rzp.open();
    }
  }, [razorpayOptions]);

  return <form></form>;
};

export default Donate;
