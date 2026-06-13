import BottomNavigation from "../components/BottomNav";
import FavouriteItem from "../components/FavoritesItem";

const Favourites = (): React.JSX.Element => {
  const favourites = [
    {
      id: 1,
      name: "Sprite Can",
      quantity: "325ml, Price",
      price: 1.5,
      image: "/products/sprite.png",
      description: "Sparkling lemon-lime soda",
      unit: "can",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Diet Coke",
      quantity: "355ml, Price",
      price: 1.99,
      image: "/products/diet-coke.png",
      description: "Zero sugar cola beverage",
      unit: "can",
      categoryId: 1,
    },
    {
      id: 3,
      name: "Apple & Grape Juice",
      quantity: "2L, Price",
      price: 15.5,
      image: "/products/juice.png",
      description: "Mixed fruit juice",
      unit: "bottle",
      categoryId: 2,
    },
    {
      id: 4,
      name: "Coca Cola Can",
      quantity: "325ml, Price",
      price: 4.99,
      image: "/products/coca-cola.png",
      description: "Classic cola soda",
      unit: "can",
      categoryId: 1,
    },
    {
      id: 5,
      name: "Pepsi Can",
      quantity: "330ml, Price",
      price: 4.99,
      image: "/products/pepsi.png",
      description: "Popular cola drink",
      unit: "can",
      categoryId: 1,
    },
  ];

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-white">
      {/* Header */}
      <header className="border-b border-[#E2E2E2]">
        <h1 className="py-6 text-center text-[22px] font-semibold text-[#181725]">
          Favourite
        </h1>
      </header>

      {/* Favourite Items */}
      <main className="flex-1 px-6">
        {favourites.map((product) => (
          <FavouriteItem
            key={product.id}
            product={product}
          />
        ))}
      </main>

      {/* Add All To Cart Button */}
      <div className="px-6 py-6">
        <button
          type="button"
          className="h-16 w-full rounded-[20px] bg-[#53B175] text-[20px] font-semibold text-white transition hover:bg-[#47A267]"
        >
          Add All To Cart
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Favourites;