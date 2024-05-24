import { usePaystackPayment } from "react-paystack";
import Button from "./ui/button";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_test_4b0b7e25e35750c83aab3a2033faab97ec0cad0c",
};

// you can call this function anything
const onSuccess = (reference: string) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const PaystackButton = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div className="w-fit mx-auto">
      <Button
        onClick={() => {
          initializePayment({
            config,
            onSuccess,
            onClose,
          });
        }}
      >
        Donate via Paystack
      </Button>
    </div>
  );
};

export default PaystackButton;
