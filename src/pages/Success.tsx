import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center items-center p-4">
      <div className="w-[390px] bg-white rounded-[30px] shadow-2xl p-8 text-center">

        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#53B175] text-white text-5xl">
            ✓
          </div>
        </div>

        <h1 className="mt-8 text-[28px] font-bold text-[#181725]">
          Your Order has been accepted
        </h1>

        <p className="mt-4 text-[#7C7C7C] leading-6">
          Your items have been placed and are on
          their way to being processed.
        </p>

        <button
          onClick={() => navigate("/home")}
          className="mt-10 h-[60px] w-full rounded-[19px] bg-[#53B175] text-lg font-semibold text-white cursor-pointer transition hover:opacity-90"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Success;