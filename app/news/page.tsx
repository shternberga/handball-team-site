export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Uzvara reģionālajā čempionātā",
      date: "25. oktobris 2025",
      content: "Mūsu komanda izcīnīja pārliecinošu uzvaru reģionālajā handbola čempionātā ar rezultātu 28:19. Šī jau ir piektā komandas uzvara šajā sezonā.",
      image: "blue"
    },
    {
      id: 2,
      title: "Jauns treneris pievienojies komandai",
      date: "20. oktobris 2025", 
      content: "Mēs priecājamies sveikt Aleksandru Petrovu - pieredzējušu treneri ar 15 gadu stāžu, kas palīdzēs komandai sasniegt jaunus augstākus rezultātus.",
      image: "green"
    },
    {
      id: 3,
      title: "Treniņnometne",
      date: "15. oktobris 2025",
      content: "Komanda piedalās intensīvā treniņnometnē sporta nometnē. Programma ietver fizisko sagatavošanu, taktiskās nodarbības un draudzīgās spēles.",
      image: "orange"
    },
    {
      id: 4,
      title: "Jaunās sezonas atklāšana",
      date: "1. septembris 2025",
      content: "Sākusies jauna skolas handbola čempionāta sezona. Mūsu komanda ir noskaņota uz uzvaru un gatava demonstrēt labāko rezultātu.",
      image: "purple"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 shimmer-text">
          Komandas jaunumi
        </h1>
        
        <div className="max-w-5xl mx-auto">
          {news.map((item) => (
            <article key={item.id} className="crystal-card rounded-2xl mb-10 overflow-hidden">
              <div className={`h-72 bg-gradient-to-br bg-${item.image}-200 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <span className="text-gray-600 text-xl font-medium relative z-10">Jaunumu foto</span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">{item.title}</h2>
                  <span className="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full font-medium">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{item.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}