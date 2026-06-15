import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex justify-center py-6">
      <div className="w-[390px] bg-white rounded-[30px] shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="border-b border-[#E2E2E2] py-6">
          <h1 className="text-center text-2xl font-semibold text-[#181725]">
            Checkout
          </h1>
        </div>

        {/* Checkout Details */}
        <div className="px-6">

          <div className="flex justify-between border-b py-5">
            <span className="text-[#7C7C7C]">Delivery</span>
            <span className="font-medium">Select Method</span>
          </div>

          <div className="flex justify-between border-b py-5">
            <span className="text-[#7C7C7C]">Payment</span>
            <span className="font-medium">Card</span>
          </div>

          <div className="flex justify-between border-b py-5">
            <span className="text-[#7C7C7C]">Promo Code</span>
            <span className="font-medium">Pick Discount</span>
          </div>

          <div className="flex justify-between border-b py-5">
            <span className="text-[#7C7C7C]">Total Cost</span>
            <span className="font-semibold">$13.97</span>
          </div>

          <p className="mt-6 text-xs leading-5 text-[#7C7C7C]">
            By placing an order you agree to our
            <span className="font-semibold text-[#181725]">
              {" "}Terms{" "}
            </span>
            and
            <span className="font-semibold text-[#181725]">
              Conditions
            </span>
            .
          </p>

          <button
            onClick={() => navigate("/success")}
            className="mt-8 mb-8 h-[60px] w-full rounded-[19px] bg-[#53B175] text-lg font-semibold text-white cursor-pointer transition hover:opacity-90"
          >
            Place Order
          </button>

        </div>
      </div>
    </div>
  );
};

export default Checkout;