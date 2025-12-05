export default function Lineup() {
  const imgs = [
    "/images/lineup1.png",
    "/images/lineup2.png",
    "/images/lineup3.png",
    "/images/lineup4.png",
    "/images/lineup5.png",
  ];

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-10">

        <h3 className="text-sm tracking-[0.15em] text-gray-500">
          STILL LINEUP
        </h3>

        {/* 横スクロール */}
        <div
          className="
            flex gap-8 overflow-x-auto pb-4
            snap-x snap-mandatory
            [-webkit-overflow-scrolling:touch]
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Chrome の scrollbar 非表示 */}
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {imgs.map((src, i) => (
            <div
              key={i}
              className="
                min-w-[260px] md:min-w-[340px]
                aspect-[3/4] overflow-hidden
                snap-start
              "
            >
              <img
                src={src}
                alt=""
                className="
                  w-full h-full object-cover 
                  transition-transform duration-700
                  hover:scale-110
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
