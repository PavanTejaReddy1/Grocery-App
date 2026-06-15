import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import { ChevronLeft, Share2, Heart } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const addToCart = useProductStore(
    (state) => state.addToCart
  );

  const products = useProductStore((state) => state.products);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen flex justify-center overflow-x-hidden px-4 py-4">
      <div className="h-full w-full rounded-[30px] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 cursor-pointer">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft size={24} className="cursor-pointer" />
          </button>

          <Share2 size={22} />
        </div>

        <div className="sm:flex sm:gap-10 sm:justify-center sm:items-center overflow-auto">
          {/* Product Image */}
          <div className="bg-[#F2F3F2] flex justify-center items-center px-6 py-10 rounded-xl">
            <img src={product.image} alt={product.name} className="sm:h-92"/>
          </div>

          {/* Content */}
          <div className="px-6 py-6">

            {/* Product Name */}
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <h1 className="text-[18px] font-bold text-[#181725] break-words">
                  {product.name}
                </h1>

                <p className="mt-1 text-[#7C7C7C]">
                  1kg, Price
                </p>
              </div>

              <Heart
                size={24}
                className="ml-4 shrink-0 cursor-pointer"
              />
            </div>

            {/* Quantity & Price */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <button className="text-lg text-[#B3B3B3]">
                  −
                </button>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300">
                  1
                </div>

                <button className="text-lg text-[#53B175]">
                  +
                </button>
              </div>

              <h2 className="text-3xl font-bold">
                ${product.price}
              </h2>
            </div>

            {/* Product Detail */}
            <div className="mt-8 border-t pt-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">
                  Product Detail
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#7C7C7C]">
                Apples are nutritious fruits rich in vitamins,
                minerals and antioxidants. They support heart
                health and improve digestion.
              </p>
            </div>

            {/* Nutrition */}
            <div className="mt-2 border-t py-5 flex items-center justify-between">
              <h3 className="font-semibold text-lg">
                Nutrition
              </h3>

              <span className="rounded-md bg-[#EBEBEB] px-3 py-1 text-xs">
                100gr
              </span>
            </div>

            {/* Review */}
            <div className="border-t py-5 flex items-center justify-between">
              <h3 className="font-semibold text-lg">
                Review
              </h3>

              <div className="text-yellow-400 text-lg">
                ★★★★★
              </div>
            </div>

            {/* Add To Basket */}
            <button
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
              className="h-[45px] w-full rounded-[19px] bg-[#53B175] text-lg font-semibold text-white transition hover:opacity-90 cursor-pointer"
            >
              Add To Basket
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;