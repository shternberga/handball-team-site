export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      {/* Винтажный фон с сеткой */}
      <div className="absolute inset-0 retro-grid opacity-10"></div>
      
      {/* Фоновые винтажные элементы */}
      <div className="absolute inset-0">
        <div className="retro-floating absolute top-8 left-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg transform rotate-45 opacity-10"></div>
        <div className="retro-floating absolute bottom-12 right-16 w-20 h-20 bg-gradient-to-br from-pink-500 to-coral-500 rounded-lg transform rotate-45 opacity-15"></div>
        <div className="retro-floating absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg transform rotate-45 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* О школе */}
          <div className="retro-card rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 neon-text tracking-wider">PAR RĪGAS RĪNŪŽU VIDUSSKOLU</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Rīgas Rīnūžu vidusskola ir vadošā izglītības iestāde ar spēcīgām sporta tradīcijām. 
              Mūsu handbola pulciņš ir skolas lepnums kopš 1990. gada.
            </p>
          </div>

          {/* Kontakti */}
          <div className="retro-card rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 neon-text tracking-wider">KONTAKTI</h3>
            <div className="text-gray-300 space-y-2 md:space-y-3">
              <p className="flex items-center text-sm md:text-base">
                <span className="text-pink-400 mr-2 md:mr-3 text-base md:text-lg">📧</span> 
                <span className="font-bold tracking-wide break-all">handbols@rinuzi.lv</span>
              </p>
              <p className="flex items-center text-sm md:text-base">
                <span className="text-pink-400 mr-2 md:mr-3 text-base md:text-lg">📞</span> 
                <span className="font-bold tracking-wide">+371 29 788 881</span>
              </p>
              <p className="flex items-start text-sm md:text-base">
                <span className="text-pink-400 mr-2 md:mr-3 text-base md:text-lg mt-0.5">📍</span> 
                <span className="font-bold tracking-wide">Augusta Dombrovska iela 88, Riga, Latvia</span>
              </p>
            </div>
          </div>

          {/* Sociālie tīkli */}
          <div className="retro-card rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 neon-text tracking-wider">MĒS SOCIĀLAJOS TĪKLOS</h3>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="group relative overflow-hidden retro-button text-black px-3 md:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
              >
                <span className="relative z-10 font-bold tracking-wider text-sm md:text-base">FACEBOOK</span>
              </a>
              <a 
                href="#" 
                className="group relative overflow-hidden retro-button text-black px-3 md:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
              >
                <span className="relative z-10 font-bold tracking-wider text-sm md:text-base">INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>

        {/* Винтажный логотип в футере */}
        <div className="border-t border-pink-500/30 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <div className="mb-3 md:mb-4">
            <div className="text-xs md:text-sm text-pink-400 mb-1 md:mb-2 tracking-[0.3em]">THIS IS</div>
            <div className="text-xl md:text-2xl font-black neon-text tracking-[0.2em]">RĪNŪŽI</div>
            <div className="text-xs md:text-xs text-pink-400 mt-1 tracking-[0.4em]">EST. 1990</div>
          </div>
          <p className="text-gray-400 font-bold tracking-wider text-xs md:text-sm leading-relaxed">
            &copy; 2025 RĪGAS RĪNŪŽU VIDUSSKOLAS HANDBOLA PULCIŅŠ.<br className="md:hidden" /> 
            <span className="hidden md:inline"> </span>VISAS TIESĪBAS AIZSARGĀTAS.
          </p>
        </div>
      </div>
    </footer>
  );
}