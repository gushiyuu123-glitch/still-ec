export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/60 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">

        {/* ===== TOP AREA ===== */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* BRAND MESSAGE */}
          <div className="space-y-3">
            <h4 className="text-sm tracking-[0.15em] text-neutral-700">
              STILL
            </h4>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              Quiet, Refined, Essential.<br />
              A study of silence, form, and minimal tension.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex gap-8 text-xs tracking-wide">
            <a
              href="/about"
              className="text-neutral-500 hover:text-black transition-colors"
            >
              ABOUT
            </a>

            <a
              href="/contact"
              className="text-neutral-500 hover:text-black transition-colors"
            >
              CONTACT
            </a>

            <a
              href="/privacy"
              className="text-neutral-500 hover:text-black transition-colors"
            >
              PRIVACY
            </a>
          </div>

        </div>

        {/* ===== BOTTOM AREA ===== */}
        <div className="pt-16 text-[11px] text-neutral-400 space-y-1">

          {/* コピーライト */}
          <p>© {new Date().getFullYear()} STILL — Quiet, Refined, Essential.</p>

          {/* ▼ あなたのリンク（上品で控えめ） */}
          <p>
            Designed by{" "}
            <a
              href="https://gushikendesign.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline text-neutral-500 hover:text-neutral-700 transition"
            >
              GUSHIKEN DESIGN
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
