import logo from "../assets/carrot.png"

const Splash = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-[#53B175] flex items-center justify-center">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <img
          src={logo}
          alt="Nectar Logo"
          className="mix-blend-multiply  w-12 h-12 object-contain"
        />

        {/* Brand */}
        <div>
          <h1 className="text-white text-5xl font-semibold tracking-tight">
            nectar
          </h1>

          <p className="text-white uppercase tracking-[0.35em] text-[9px] mt-1">
            online groceries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Splash;