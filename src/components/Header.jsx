import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Collection", target: "collection" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50
        bg-white/90 backdrop-blur-sm
        border-b border-neutral-200/50
        transition-shadow duration-300
        ${scrolled ? "shadow-sm" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto py-6 px-6 flex justify-between items-center">

        {/* Logo */}
        <div
          onClick={() => handleScrollTo("top")}
          className="text-xl tracking-[0.25em] font-light cursor-pointer opacity-0 animate-fadeInSlow"
        >
          STILL
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 text-sm text-neutral-600">
          {navItems.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => handleScrollTo(target)}
              className="
                relative pb-1 group transition text-sm 
              "
            >
              <span className="group-hover:text-black">
                {label}
              </span>
              <span
                className="
                  absolute left-0 bottom-0 h-[1px] bg-black
                  w-0 group-hover:w-full
                  transition-all duration-300
                "
              ></span>
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}
