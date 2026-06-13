import CartItem from "../components/CartItem";
import BottomNavigation from "../components/BottomNav";

const Cart = (): React.JSX.Element => {
  const cartItems = [
    {
      id: 1,
      name: "Bell Pepper Red",
      quantity: "1kg, Price",
      price: 4.99,
      image: "/products/pepper.png",
      description: "Fresh red bell pepper",
      unit: "kg",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Egg Chicken Red",
      quantity: "4pcs, Price",
      price: 1.99,
      image: "/products/egg.png",
      description: "Fresh chicken eggs",
      unit: "pcs",
      categoryId: 2,
    },
    {
      id: 3,
      name: "Organic Bananas",
      quantity: "12kg, Price",
      price: 3.0,
      image: "/products/banana.png",
      description: "Organic bananas",
      unit: "kg",
      categoryId: 3,
    },
    {
      id: 4,
      name: "Ginger",
      quantity: "250gm, Price",
      price: 2.99,
      image: "/products/ginger.png",
      description: "Fresh ginger root",
      unit: "gm",
      categoryId: 4,
    },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-md bg-white pb-28">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[#E2E2E2] bg-white">
        <h1 className="py-6 text-center text-2xl font-semibold text-[#181725]">
          My Cart
        </h1>
      </header>

      {/* Cart Items */}
      <main className="px-6">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            product={item}
            quantity={1}
          />
        ))}
      </main>

      {/* Checkout */}
      <div className="px-6 py-4">
  <button
    type="button"
    className="flex h-16 w-full items-center justify-center rounded-[20px] bg-[#53B175] text-xl font-semibold text-white"
  >
    Go to Checkout

    <span className="ml-4 rounded-md bg-[#489E67] px-2 py-1 text-sm">
      $12.96
    </span>
  </button>
</div>

      <BottomNavigation />
    </div>
  );
};

export default Cart;