import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Главный баннер в стиле логотипа */}
            {/* Главная секция с увеличенным логотипом слева */}
      <section className="bg-black flex items-center py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center md:text-left">
            <div className="text-2xl md:text-4xl text-pink-400 mb-4 md:mb-6 tracking-wider">THIS IS</div>
            <div className="text-5xl md:text-9xl font-black neon-text tracking-wider mb-4 md:mb-6">RĪNŪŽI</div>
            <div className="text-2xl md:text-4xl text-pink-400 mb-3 md:mb-4 tracking-wider">EST. 1990</div>
            <div className="text-3xl md:text-5xl text-pink-300 tracking-widest">HANDBOLS</div>
          </div>
        </div>
      </section>

      {/* Ближайшие игры в винтажном стиле */}
      <section className="py-12 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-16 vintage-title">
            GAIDĀMĀS SPĒLES
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="retro-card rounded-lg p-4 md:p-8 border-l-4 border-pink-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6">
                  <div className="mb-3 md:mb-0">
                    <h3 className="text-lg md:text-2xl font-bold text-pink-400 mb-1 md:mb-2 tracking-wide">RĪNŪŽU HANDBOLS vs SPARTAKS</h3>
                    <p className="text-gray-300 text-base md:text-lg tracking-wide">REĢIONĀLAIS ČEMPIONĀTS</p>
                  </div>
                  <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-black px-3 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm font-bold tracking-wider self-start">
                    MĀJĀS
                  </span>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p className="flex items-center text-sm md:text-lg font-bold tracking-wide">📅 30. OKTOBRIS 2025, 18:00</p>
                  <p className="flex items-center text-sm md:text-lg font-bold tracking-wide">📍 RĪNŪŽU VIDUSSKOLAS SPORTA ZĀLE</p>
                </div>
              </div>

              <div className="retro-card rounded-lg p-4 md:p-8 border-l-4 border-pink-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6">
                  <div className="mb-3 md:mb-0">
                    <h3 className="text-lg md:text-2xl font-bold text-pink-400 mb-1 md:mb-2 tracking-wide">DINAMO vs RĪNŪŽU HANDBOLS</h3>
                    <p className="text-gray-300 text-base md:text-lg tracking-wide">FEDERĀCIJAS KAUSS</p>
                  </div>
                  <span className="bg-gradient-to-r from-pink-400 to-coral-500 text-black px-3 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm font-bold tracking-wider self-start">
                    CIEMOS
                  </span>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p className="flex items-center text-sm md:text-lg font-bold tracking-wide">📅 5. NOVEMBRIS 2025, 19:30</p>
                  <p className="flex items-center text-sm md:text-lg font-bold tracking-wide">📍 SPORTA KOMPLEKSS &quot;DINAMO&quot;</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Link 
              href="/games" 
              className="retro-button text-black px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl tracking-wider text-sm md:text-base"
            >
              VISAS SPĒLES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
