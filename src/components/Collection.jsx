import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// 商品データ（今のまま）
const items = [
  {
    id: 1,
    img: "/images/TOPS.png",
    category: "TOPS",
    name: "Soft Minimal Knit",
    price: "¥18,800",
  },
  {
    id: 2,
    img: "/images/COAT.png",
    category: "COAT",
    name: "Structured Wool Coat",
    price: "¥32,400",
  },
  {
    id: 3,
    img: "/images/BAG.png",
    category: "BAG",
    name: "Folded Leather Tote",
    price: "¥21,900",
  },
  {
    id: 4,
    img: "/images/TOPS1.png",
    category: "TOPS",
    name: "Relax Silky Shirt",
    price: "¥15,200",
  },
  {
    id: 5,
    img: "/images/BAG1.png",
    category: "BAG",
    name: "Soft Leather Mini Tote",
    price: "¥19,500",
  },
  {
    id: 6,
    img: "/images/COAT1.png",
    category: "COAT",
    name: "Minimal Trench Coat",
    price: "¥28,900",
  },
];

export default function Collection() {
  const sectionRef = useRef(null);

  // ===== フェードイン（IntersectionObserver） =====
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const targets = root.querySelectorAll(".fade-up");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Title */}
        <h2 className="text-xl font-light tracking-[0.15em] fade-up delay-[0ms]">
          NEW COLLECTION
        </h2>

        {/* Items Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            gap-10
          "
        >
          {items.map((item, i) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className={`space-y-3 group block fade-up delay-[${100 * (i + 1)}ms]`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="
                    w-full h-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              <p className="text-xs tracking-wide text-gray-500">
                {item.category}
              </p>

              <p className="text-sm font-light text-gray-900">
                {item.name}
              </p>

              <p className="text-sm text-gray-700">
                {item.price}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
