import groceryImage from "../assets/grocery-top.jpg";

const SignIn = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-[#FCFCFC] flex justify-center">
      <div className="w-full max-w-[375px] bg-white md:my-8 md:rounded-[32px] md:shadow-xl md:overflow-hidden ">

        <div className="relative h-[350px] overflow-hidden">
          <img src={groceryImage} alt="Groceries" className="absolute top-[-45px] left-[60px] w-[400px] max-w-none"/>
        </div>

        <div className="px-8 pb-8">
          <h1 className="text-[28px] font-semibold leading-[36px] text-[#181725]">
            Get your groceries
            <br />
            with nectar
          </h1>

          <div className="mt-8 flex items-center gap-3 border-b border-[#E2E2E2] pb-4 cursor-pointer">
            <span className="text-lg">🇮🇳</span>

            <span className="text-[18px] font-medium text-[#181725]">
              +91
            </span>
          </div>

          <p className="mt-10 text-center text-[14px] text-[#828282]">
            Or connect with social media
          </p>

          <button type="button" className="mt-8 h-[60px] w-full rounded-[19px] bg-[#5383EC] text-white font-semibold transition hover:opacity-90 cursor-pointer">
            Continue with Google
          </button>

          <button type="button" className=" mt-4 h-[60px] w-full rounded-[19px] bg-[#4A66AC] text-white font-semibold transition hover:opacity-90 cursor-pointer">
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;