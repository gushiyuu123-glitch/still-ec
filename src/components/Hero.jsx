import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  // ===== フェードインアニメ：IntersectionObserver =====
  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const targets = root.querySelectorAll(".fade-up");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full bg-white px-6 md:px-20 py-20 flex items-center justify-center"
    >
      <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left — Typography with faint background */}
        <div className="relative flex flex-col space-y-6 p-10 md:translate-x-[-35px] md:-translate-y-[-55px]">

          {/* BACKGROUND IMAGE */}
         <img
  src="/images/still-main.png"
  alt=""
  className="
    absolute inset-0 w-full h-full 
    object-cover 
    opacity-[0.4] 
    pointer-events-none 
    fade-up
    scale-110           // ← これ追加
  "
/>


          <h1 className="text-5xl tracking-[0.25em] font-light relative z-10 fade-up delay-[0ms]">
            S T I L L
          </h1>

          <p className="text-gray-500 tracking-wide relative z-10 fade-up delay-[100ms]">
            Quiet, Refined, Essential.
          </p>

          <div className="h-px w-24 bg-gray-300 mt-4 relative z-10 fade-up delay-[200ms]"></div>

          <p className="text-sm leading-relaxed text-gray-600 max-w-sm relative z-10 fade-up delay-[300ms]">
            A study of silence and form.
            Shapes, textures, and the quiet tension between them.
          </p>
        </div>

        {/* Right — Main Editorial Photo */}
        <div
          className="
            relative
            w-full h-[550px]
            md:h-[650px]
            md:w-[400px]
            overflow-hidden
            transform
            md:translate-x-[160px]
            md:-translate-y-[-45px]
          "
        >
          {/* ← transform の影響を受けない fade 対象 */}
          <div className="fade-up delay-[200ms]">
            <img
              src="/images/still-main1.png"
              alt="Editorial Fragment"
              className="w-full h-full object-cover object-[60%_center] scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
