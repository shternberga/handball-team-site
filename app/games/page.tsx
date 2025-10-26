export default function GamesPage() {
  const upcomingGames = [
    {
      id: 1,
      opponent: "ГК Спартак",
      date: "30 октября 2025",
      time: "18:00",
      venue: "Спортзал школы Ринуза",
      type: "Региональный чемпионат",
      isHome: true
    },
    {
      id: 2,
      opponent: "ГК Динамо",
      date: "5 ноября 2025",
      time: "19:30",
      venue: "Спорткомплекс \"Динамо\"",
      type: "Кубок федерации",
      isHome: false
    },
    {
      id: 3,
      opponent: "ГК Торпедо",
      date: "12 ноября 2025",
      time: "17:00",
      venue: "Спортзал школы Ринуза",
      type: "Региональный чемпионат",
      isHome: true
    }
  ];

  const pastGames = [
    {
      id: 1,
      opponent: "ГК Локомотив",
      date: "20 октября 2025",
      score: "28:19",
      venue: "Спортзал школы Ринуза",
      type: "Региональный чемпионат",
      result: "Победа"
    },
    {
      id: 2,
      opponent: "ГК Зенит",
      date: "15 октября 2025",
      score: "22:25",
      venue: "Арена \"Зенит\"",
      type: "Кубок федерации",
      result: "Поражение"
    },
    {
      id: 3,
      opponent: "ГК Салют",
      date: "8 октября 2025",
      score: "31:18",
      venue: "Спортзал школы Ринуза",
      type: "Региональный чемпионат",
      result: "Победа"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Календарь игр
        </h1>
        
        {/* Ближайшие игры */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Ближайшие игры</h2>
          <div className="space-y-4">
            {upcomingGames.map((game) => (
              <div key={game.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        ГК Ринуза vs {game.opponent}
                      </h3>
                      <span className={`ml-3 px-3 py-1 rounded-full text-sm ${
                        game.isHome 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {game.isHome ? 'Дома' : 'В гостях'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-1">{game.type}</p>
                    <div className="text-sm text-gray-600">
                      <p>📅 {game.date}, {game.time}</p>
                      <p>📍 {game.venue}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Купить билеты
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Прошедшие игры */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Последние результаты</h2>
          <div className="space-y-4">
            {pastGames.map((game) => (
              <div key={game.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        ГК Ринуза vs {game.opponent}
                      </h3>
                      <span className={`ml-3 px-3 py-1 rounded-full text-sm ${
                        game.result === 'Победа' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {game.result}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-1">{game.type}</p>
                    <div className="text-sm text-gray-600">
                      <p>📅 {game.date}</p>
                      <p>📍 {game.venue}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-2xl font-bold text-gray-800">
                      {game.score}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Статистика сезона */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Статистика текущего сезона
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                <p className="text-gray-700">Побед</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">3</div>
                <p className="text-gray-700">Поражений</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
                <p className="text-gray-700">Ничьих</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">385</div>
                <p className="text-gray-700">Забитых голов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}