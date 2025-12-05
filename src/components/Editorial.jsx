export default function Editorial() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-20">

        {/* 背景フルワイド写真 */}
        <div className="w-full h-[380px] md:h-[500px] overflow-hidden rounded-sm">
          <img
            src="/images/editorial-main.png"
            alt="Editorial Still"
            className="w-full h-full object-cover opacity-[0.95]"
          />
        </div>

        {/* テキストボックス */}
        <div className="absolute bottom-8 right-10 bg-white/80 backdrop-blur-sm p-8 shadow-sm max-w-sm">
          <h3 className="tracking-[0.25em] text-xl font-light mb-3">
            S T I L L
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            A study of silence and form.  
            Shapes, textures, and the quiet space between.
          </p>

          <button className="border border-gray-700 px-6 py-2 text-xs tracking-wider hover:bg-gray-800 hover:text-white transition-all">
            READ JOURNAL
          </button>
        </div>

      </div>
    </section>
  );
}
