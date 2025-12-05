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
      className="
        w-full 
        bg-white 
        px-6 md:px-16 
        py-24 
        flex items-center justify-center
      "
    >
      <div
        className="
          w-full 
          max-w-[1500px] 
          grid grid-cols-1 md:grid-cols-2 
          gap-20 
          items-center
        "
      >

        {/* ------------------------------------------------------ */}
        {/* Left Block – Typographic × Background Image */}
        {/* ------------------------------------------------------ */}
        <div
          className="
            relative 
            flex flex-col space-y-6 
            p-10 
            md:translate-x-[-40px] 
            md:-translate-y-[-50px]
          "
        >
          {/* 背景画像（大きめにスケール） */}
          <img
            src="/images/still-main.png"
            alt=""
            className="
              absolute inset-0 
              w-full h-full 
              object-cover 
              opacity-[0.45] 
              pointer-events-none
              scale-[1.12]
              fade-up
            "
          />

          <h1
            className="
              text-5xl md:text-[56px] 
              tracking-[0.25em] 
              font-light 
              relative z-10 
              fade-up delay-[0ms]
            "
          >
            S T I L L
          </h1>

          <p
            className="
              text-gray-500 
              tracking-wide 
              relative z-10 
              fade-up delay-[100ms]
            "
          >
            Quiet, Refined, Essential.
          </p>

          <div
            className="
              h-px w-24 
              bg-gray-300 
              mt-4 
              relative z-10 
              fade-up delay-[200ms]
            "
          ></div>

          <p
            className="
              text-sm text-gray-600 
              leading-relaxed 
              max-w-sm 
              relative z-10 
              fade-up delay-[300ms]
            "
          >
            A study of silence and form.
            Shapes, textures, and the quiet tension between them.
          </p>
        </div>

        {/* ------------------------------------------------------ */}
        {/* Right Block – Editorial Image */}
        {/* ------------------------------------------------------ */}
        <div
          className="
            relative 
            w-full 
            h-[550px] md:h-[680px] 
            md:w-[420px]
            overflow-hidden
            md:translate-x-[160px] 
            md:-translate-y-[-50px]
          "
        >
          <div className="fade-up delay-[200ms]">
            <img
              src="/images/still-main1.png"
              alt="Editorial"
              className="
                w-full h-full 
                object-cover 
                object-[60%_center] 
                scale-[1.12]
              "
            />
          </div>

          <div
            className="
              absolute inset-0 
              bg-gradient-to-b 
              from-black/10 to-transparent 
              pointer-events-none
            "
          ></div>
        </div>

      </div>
    </section>
  );
}
