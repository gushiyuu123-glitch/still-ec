export default function BrandEssence() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide">
            Essential Forms for a Quiet Life.
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
            形、素材、静けさ。それらの最小限の構成が、日常をより美しく整えます。
            STILL は「必要なものだけを残す」デザイン哲学を追求しています。
          </p>
        </div>

        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="/images/still-essence.png"
            className="w-full h-full object-cover"
            alt="Essence"
          />
        </div>
      </div>
    </section>
  );
}
