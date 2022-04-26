import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({}) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  return (
    <>
      <PayPalButtons
        //@ts-ignore
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        //@ts-ignore
        onApprove={function (data, actions) {
          return actions.order?.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

export default function App() {
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id": "test",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper />
      </PayPalScriptProvider>
    </div>
  );
}

/* import React, { useEffect, useRef } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = (props: any) => {
  const { product } = props;

  return (
    <PayPalButtons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 40,
        tagline: false,
        shape: "pill",
      }}
      disabled={false}
      forceReRender={[20, "USD"]}
      fundingSource={undefined}
    />
  );
};

export default Paypal;
*/
