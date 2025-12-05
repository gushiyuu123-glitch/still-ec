export default function Fragment() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Left — Tall Architecture */}
        <div className="md:col-span-5 aspect-[3/5] overflow-hidden">
          <img
            src="/images/still-frag1.png"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Middle — Square */}
        <div className="md:col-span-4 aspect-square overflow-hidden mt-20 md:mt-32">
          <img
            src="/images/still-frag2.png"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Right — Slim Tall */}
        <div className="md:col-span-3 aspect-[2/5] overflow-hidden mt-10 md:mt-0">
          <img
            src="/images/still-frag3.png"
            className="w-full h-full object-cover scale-110"
          />
        </div>

      </div>
    </section>
  );
}
