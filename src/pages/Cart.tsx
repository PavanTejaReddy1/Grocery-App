import CartItem from "../components/CartItem";
import BottomNavigation from "../components/BottomNav";
import { useProductStore } from "../store/productStore";
import { useNavigate } from "react-router-dom";

const Cart = (): React.JSX.Element => {
  const navigate = useNavigate();
  const cartItems = useProductStore((state) => state.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div className="bg-[#f8f8f8] flex justify-center">
      <div className="w-full sm:p-10">

        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-[#E2E2E2] bg-white">
          <h1 className="py-6 text-center text-2xl font-semibold text-[#181725]">
            My Cart
          </h1>
        </header>

        {/* Cart Items */}
        <main className="min-h-[400px] lg:min-h-[450px] px-6 overflow-y-auto">

          {cartItems.length === 0 ? (
            <div className="flex h-[450px] items-center justify-center">
              <p className="text-lg text-[#7C7C7C]">
                Your cart is empty
              </p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                product={item}
                quantity={1}
              />
            ))
          )}

        </main>

        {/* Checkout Button */}
        <div className="px-6 py-4">
          <button
            type="button"
            onClick={() => navigate("/checkout")}
            className="flex h-16 w-full items-center justify-center rounded-[20px] bg-[#53B175] text-xl font-semibold text-white cursor-pointer transition hover:opacity-90 mb-50"
          >
            Go to Checkout

            <span className="ml-4 rounded-md bg-[#489E67] px-2 py-1 text-sm">
              ${total.toFixed(2)}
            </span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Cart;