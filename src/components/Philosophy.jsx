export default function Philosophy() {
  return (
    <section className="w-full py-32 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left — Copy */}
   <div className="space-y-6 md:mt-[-40px]">
          <h2 className="text-2xl font-light tracking-[0.15em]">
            Quiet Design for Everyday Living
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 max-w-sm">
            日常に静けさをもたらす衣服。  
            形、触感、余白がつくる穏やかな緊張。  
            STILL は、必要最小限の美しさを追求しています。
          </p>
        </div>

        {/* Right — Minimal Photo */}
        <div className="w-full aspect-[4/5] overflow-hidden">
          <img
            src="/images/still-philo1.png"
            className="w-full h-full object-cover scale-105 opacity-[0.98]"
            alt="Philosophy"
          />
        </div>

      </div>
    </section>
  );
}
