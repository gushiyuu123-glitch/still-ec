export default function CategoryLinks() {
  const categories = ["TOPS", "COAT", "BAG", "ALL"];

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <h3 className="text-sm tracking-[0.15em] text-gray-500 mb-6">
          CATEGORIES
        </h3>

        <div className="flex gap-10 md:gap-14 border-t border-gray-200 pt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className="
                text-sm tracking-wide text-gray-600 
                relative pb-1 group
                hover:text-black transition-all duration-300
              "
            >
              {cat}

              {/* 下線アニメ */} 
              <span
                className="
                  absolute left-0 bottom-0 
                  h-[1px] w-0 bg-black 
                  transition-all duration-300
                  group-hover:w-full
                "
              ></span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
