import { useState } from "react";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/productStore";

const Search = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const products = useProductStore((state) => state.products);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-white">

      <div className="w-full">

        <div className="p-6">

          <h1 className="text-2xl font-bold text-center">
            Find Products
          </h1>

          {/* Search Bar */}
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#F2F3F2] px-4 py-3">

            <SearchIcon size={20} />

            <input
              type="text"
              placeholder="Search Store"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none"
            />

            <SlidersHorizontal size={20} />
          </div>

          {/* Products */}
          <div className="mt-6 grid grid-cols-2 gap-4">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="cursor-pointer rounded-2xl border border-gray-200 p-4 hover:shadow-md transition"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto h-24 object-contain"
                />

                <h3 className="mt-3 font-semibold">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {product.quantity}
                </p>

                <div className="mt-3 flex items-center justify-between">

                  <span className="font-bold">
                    ${product.price}
                  </span>

                  <button className="h-8 w-8 rounded-lg bg-[#53B175] text-white">
                    +
                  </button>

                </div>

              </div>
            ))}

          </div>

          {filteredProducts.length === 0 && (
            <p className="mt-8 text-center text-gray-500">
              No products found
            </p>
          )}

        </div>

      </div>

    </div>
  );
};

export default Search;