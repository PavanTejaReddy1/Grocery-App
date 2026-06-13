import { FiChevronRight } from "react-icons/fi";
import type { Product } from "../types/Product";

interface FavouriteItemProps {
  product: Product;
  onClick?: (id: number) => void;
}

const FavouriteItem = ({
  product,
  onClick,
}: FavouriteItemProps): React.JSX.Element => {
  return (
    <div className="flex items-center justify-between border-b border-[#E2E2E2] py-5">
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <div className="flex h-16 w-16 items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h3 className="text-[18px] font-semibold text-[#181725]">
            {product.name}
          </h3>

          <p className="mt-1 text-[14px] text-[#7C7C7C]">
            {product.quantity}
          </p>
        </div>
      </div>

      {/* Price + Arrow */}
      <div className="flex items-center gap-3">
        <span className="text-[18px] font-semibold text-[#181725]">
          ${product.price.toFixed(2)}
        </span>

        <button
          type="button"
          onClick={() => onClick?.(product.id)}
        >
          <FiChevronRight
            size={24}
            className="text-[#181725]"
          />
        </button>
      </div>
    </div>
  );
};

export default FavouriteItem;