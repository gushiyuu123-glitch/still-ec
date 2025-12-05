import { useParams } from "react-router-dom";
import { items } from "../data/items";

export default function ProductDetail() {
  const { id } = useParams(); 
  const product = items.find((item) => item.id === Number(id));

  if (!product) return <p className="p-10">Product not found.</p>;

  return (
    <section className="w-full bg-white px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT : IMAGE */}
        <div>
          <img
            src={product.img}
            alt={product.name}
            className="w-full object-cover rounded-sm h-[75%]"
          />
        </div>

        {/* RIGHT : INFO */}
        <div className="flex flex-col space-y-8">
          <p className="text-xs tracking-wide text-gray-500">{product.category}</p>

          <h1 className="text-3xl font-light tracking-wide">
            {product.name}
          </h1>

          <p className="text-xl text-gray-700">{product.price}</p>

          <div className="h-px bg-gray-200"></div>

          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            {product.description}
          </p>

          {/* Sizes */}
          <div>
            <p className="text-xs text-gray-500 mb-2 tracking-wide">SIZE</p>

            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="
                    border border-gray-300 text-gray-700
                    px-4 py-2 text-sm
                    hover:border-black transition
                  "
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="
              border border-gray-800 text-gray-800 
              py-3 text-sm tracking-wide
              hover:bg-gray-900 hover:text-white
              transition-all duration-300
            "
          >
            ADD TO CART
          </button>

          {/* Size Guide */}
          <div className="pt-6">
            <p className="text-xs tracking-wide text-gray-500 mb-3">
              SIZE GUIDE
            </p>

            <table className="text-sm text-gray-600 w-full max-w-sm">
              <tbody>
                {Object.entries(product.sizeGuide).map(([size, text]) => (
                  <tr key={size} className="border-b">
                    <td className="py-2">{size}</td>
                    <td className="py-2 text-right">{text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}
