import { FiPlus, FiMinus, FiX } from "react-icons/fi";
import type { Product } from "../types/Product";

interface CartItemProps {
  product: Product;
  quantity: number;
  onIncrement?: (id: number) => void;
  onDecrement?: (id: number) => void;
  onRemove?: (id: number) => void;
}

const CartItem = ({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps): React.JSX.Element => {
  return (
    <div className="border-b border-[#E2E2E2] py-6">
      <div className="flex gap-4">
        {/* Image */}
        <div className="flex h-20 w-20 items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between">
            <div>
              <h3 className="text-[18px] font-semibold text-[#181725]">
                {product.name}
              </h3>

              <p className="text-[14px] text-[#7C7C7C]">
                {product.quantity}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onRemove?.(product.id)}
              className="text-[#B3B3B3]"
            >
              <FiX size={24} />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onDecrement?.(product.id)}
                className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-[#E2E2E2]"
              >
                <FiMinus
                  size={22}
                  className="text-[#B3B3B3]"
                />
              </button>

              <span className="text-lg font-medium">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => onIncrement?.(product.id)}
                className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-[#E2E2E2]"
              >
                <FiPlus
                  size={22}
                  className="text-[#53B175]"
                />
              </button>
            </div>

            <span className="text-xl font-semibold text-[#181725]">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;