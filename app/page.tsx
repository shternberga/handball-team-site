import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Главный баннер в стиле логотипа */}
            {/* Главная секция с увеличенным логотипом слева */}
      <section className="bg-black flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <div className="text-4xl text-pink-400 mb-6 tracking-wider">THIS IS</div>
            <div className="text-9xl font-black neon-text tracking-wider mb-6">RĪNŪŽI</div>
            <div className="text-4xl text-pink-400 mb-4 tracking-wider">EST. 1990</div>
            <div className="text-5xl text-pink-300 tracking-widest">HANDBOLS</div>
          </div>
        </div>
      </section>

      {/* Ближайшие игры в винтажном стиле */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 vintage-title">
            GAIDĀMĀS SPĒLES
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="retro-card rounded-lg p-8 border-l-4 border-pink-500">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-400 mb-2 tracking-wide">RĪNŪŽU HANDBOLS vs SPARTAKS</h3>
                    <p className="text-gray-300 text-lg tracking-wide">REĢIONĀLAIS ČEMPIONĀTS</p>
                  </div>
                  <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-black px-4 py-2 rounded-lg text-sm font-bold tracking-wider">
                    MĀJĀS
                  </span>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p className="flex items-center text-lg font-bold tracking-wide">📅 30. OKTOBRIS 2025, 18:00</p>
                  <p className="flex items-center text-lg font-bold tracking-wide">📍 RĪNŪŽU VIDUSSKOLAS SPORTA ZĀLE</p>
                </div>
              </div>

              <div className="retro-card rounded-lg p-8 border-l-4 border-pink-400">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-400 mb-2 tracking-wide">DINAMO vs RĪNŪŽU HANDBOLS</h3>
                    <p className="text-gray-300 text-lg tracking-wide">FEDERĀCIJAS KAUSS</p>
                  </div>
                  <span className="bg-gradient-to-r from-pink-400 to-coral-500 text-black px-4 py-2 rounded-lg text-sm font-bold tracking-wider">
                    CIEMOS
                  </span>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p className="flex items-center text-lg font-bold tracking-wide">📅 5. NOVEMBRIS 2025, 19:30</p>
                  <p className="flex items-center text-lg font-bold tracking-wide">📍 SPORTA KOMPLEKSS &quot;DINAMO&quot;</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/games" 
              className="retro-button text-black px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl tracking-wider"
            >
              VISAS SPĒLES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
