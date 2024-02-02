import React from 'react';

const Donate= () => {
  return (
    <div id="page">
      <div id="header">
        {/* Header content goes here */}
      </div>
      <div id="content" className="widecolumn">
        <h2>Donate Every Month</h2>
        <br />
        <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row' }}>
          <form>
            <script src="https://cdn.razorpay.com/static/widget/subscription-button.js" data-subscription_button_id="pl_JsrIQYADKfGc7s" data-button_theme="rzp-outline-standard" async>
            </script>
          </form>
        </div>
        <h2>One Time Donation</h2>
        <br />
        <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row' }}>
          <form>
            <a href="https://securegw.paytm.in/link/paymentForm/95925/LL_565151442" target='_blank' rel='im-checkout' data-behaviour='remote' data-style='light' data-text="Donate with Paytm" style={{ borderRadius: '2px', display: 'inline-block', border: '1px solid #e6ebf3', padding: '0 41px', color: '#182233', fontSize: '16px', textDecoration: 'none', fontFamily: 'Nunito Sans, sans-serif', height: '56px', lineHeight: '56px', background: '#f6f8fc', }}>
              <span>Donate with</span>
              <img style={{ marginLeft: '6px', verticalAlign: 'sub', width: '74px' }} src="https://staticgw.paytm.in/1.4/plogo/paytmlogo-coloured.png" alt="Paytm Logo" />
            </a>
          </form>
        </div>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row' }}>
          {/* Additional content goes here */}
        </div>
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default Donate;
