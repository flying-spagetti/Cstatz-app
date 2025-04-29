import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 text-gray-900 p-8 min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold mb-8 text-[#1F2937] text-center animate__animated animate__fadeIn animate__delay-1s">
            CStatz - Advanced Cricket Analysis Platform
          </h1>
          
          {/* Video Section */}
          <section className="w-full max-w-6xl mb-8 bg-white shadow-lg rounded-lg p-6 relative">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Feature Overview</h2>
            <div className="relative aspect-w-16 aspect-h-9 mb-4">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/tLpxg0uJYig" 
                title="CStatz Overview Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-base leading-relaxed text-gray-700">Watch our feature overview video to see CStatz in action and understand how our platform can enhance your cricket analysis.</p>
          </section>

          {/* Features Sections */}
          <section className="w-full max-w-6xl mb-8 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Real-Time Statistics</h2>
            <p className="text-base leading-relaxed text-gray-700">Get live stats during matches to stay updated with every run, wicket, and milestone as they happen. Our real-time updates ensure you never miss a crucial moment.</p>
          </section>
          
          <section className="w-full max-w-6xl mb-8 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Player Performance Analysis</h2>
            <p className="text-base leading-relaxed text-gray-700">Dive deep into individual performances with dedicated player statistics and comparisons. Analyze batting and bowling metrics to evaluate player contributions effectively.</p>
          </section>
          
          <section className="w-full max-w-6xl mb-8 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Historical Data</h2>
            <p className="text-base leading-relaxed text-gray-700">Explore historical data of teams and players to understand their journey and performance trends over the years. Our comprehensive data archive provides valuable insights into past performances.</p>
          </section>
          
          <section className="w-full max-w-6xl mb-8 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Interactive Graphs</h2>
            <p className="text-base leading-relaxed text-gray-700">Engage with interactive graphs and charts to visualize data in an easy-to-understand format. Our interactive tools make it simple to explore trends and patterns.</p>
          </section>

          {/* Heat of the Moment - Live Tweets */}
          <section className="w-full max-w-6xl mb-8 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Heat of the Moment - Live Tweets</h2>
            <div className="space-y-4">
              <div className="bg-[#f5f8fa] border border-[#e1e8ed] rounded-lg p-4">
                <div className="flex items-start">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
                    alt="Profile"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">CricketFan</div>
                    <div className="text-sm text-gray-600">@cricketfan123</div>
                    <p className="mt-2 text-base text-gray-800">Exciting match with unexpected twists! #CricketLove</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span>March 15, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f8fa] border border-[#e1e8ed] rounded-lg p-4">
                <div className="flex items-start">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
                    alt="Profile"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">SportsEnthusiast</div>
                    <div className="text-sm text-gray-600">@enthusiast789</div>
                    <p className="mt-2 text-base text-gray-800">Incredible performance by the team! #GoTeam</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span>March 15, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more tweet-like blocks here */}
            </div>
          </section>
          
          <section className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-2s">Relive the Best Moments in Cricket</h2>
            <p className="text-lg animate__animated animate__fadeIn animate__delay-2s">Explore our extensive highlights and get detailed analyses of every game-changing event. Our highlight reels capture the excitement of cricket like never before.</p>
          </section>

          {/* Interactive Grid */}
          <section className="w-full max-w-6xl mb-8 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Interactive Grid</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Example Grid Items */}
              <div className="bg-gray-50 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Player of the Match</h3>
                <p className="text-base text-gray-700">Highlight the standout player from recent matches with detailed stats and analysis.</p>
              </div>
              <div className="bg-gray-50 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Match Summary</h3>
                <p className="text-base text-gray-700">Get a quick overview of the match with key statistics and game-changing moments.</p>
              </div>
              <div className="bg-gray-50 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Top Performers</h3>
                <p className="text-base text-gray-700">Explore the top performers based on various metrics and their impact on the game.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}