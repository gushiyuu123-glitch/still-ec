export default function Footer() {
  const links = ["ABOUT", "CONTACT", "PRIVACY"];

  return (
    <footer className="w-full border-t border-neutral-200/60 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">

        {/* 上部リンクエリア */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* ブランドメッセージ */}
          <div className="space-y-3">
            <h4 className="text-sm tracking-[0.15em] text-neutral-700">
              STILL
            </h4>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              Quiet, Refined, Essential.<br />
              A study of silence, form, and minimal tension.
            </p>
          </div>

          {/* リンク */}
          <div className="flex gap-8 text-xs tracking-wide">
            {links.map((link) => (
              <button
                key={link}
                className="
                  text-neutral-500 
                  hover:text-black 
                  transition-colors
                "
              >
                {link}
              </button>
            ))}
          </div>

        </div>

        {/* ボトム（コピーライト） */}
        <div className="pt-16 text-[11px] text-neutral-400">
          © STILL — Quiet, Refined, Essential.
        </div>

      </div>
    </footer>
  );
}
