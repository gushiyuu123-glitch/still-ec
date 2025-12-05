// src/components/ContactSection.jsx
import { useEffect, useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);

  // fade-up observer（Contact専用）
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".fade-up");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-32 px-6 md:px-20 bg-white border border-neutral-200/40">
      <div className="max-w-3xl mx-auto text-center space-y-8">

        <h2 className="text-xl md:text-2xl font-light tracking-wide fade-up">
          Contact
        </h2>

        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed fade-up delay-[100ms]">
          STILL へのお問い合わせやご相談は、下記フォームよりご連絡ください。
          静かに、丁寧にお返事いたします。
        </p>

        <form className="space-y-6 max-w-md mx-auto fade-up delay-[200ms]">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none"
          ></textarea>

          <button className="
  border border-black px-6 py-3 text-sm tracking-wide 
  hover:bg-black hover:text-white 
  transition-all duration-300
  shadow-[0_0_0_1px_rgba(0,0,0,0.04)]
"
>
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
