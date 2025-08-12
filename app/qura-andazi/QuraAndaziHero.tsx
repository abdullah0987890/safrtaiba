
'use client';

export default function QuraAndaziHero() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Golden%20lottery%20balls%20with%20Islamic%20geometric%20patterns%20floating%20in%20ethereal%20light%2C%20surrounded%20by%20traditional%20Middle%20Eastern%20architecture%2C%20warm%20golden%20glow%2C%20spiritual%20atmosphere%2C%20luck%20and%20blessing%20concept%2C%20ornate%20Islamic%20decorative%20elements%2C%20mystical%20ambiance%2C%20high%20quality%20cinematic%20composition&width=1920&height=1080&seq=qura1&orientation=landscape)`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-green-900/40"></div>
      
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-yellow-400">Qura Andazi</span>
            <br />
            Your Chance for a Blessed Journey
          </h1>
          
          <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Try your luck in our monthly draw! Pay only Rs. 950 token fee and get a chance to win 
            a fully-paid Umrah package. If you don't win, get your Gift as a refund!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-yellow-500 rounded-full">
                <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Rs. 950 Only</h3>
              <p className="text-gray-200">Affordable token fee for everyone</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-green-500 rounded-full">
                <i className="ri-gift-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Win Umrah Package</h3>
              <p className="text-gray-200">Complete package worth PKR 250,000</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-500 rounded-full">
                <i className="ri-refund-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Gift as Refund</h3>
              <p className="text-gray-200">You get gift as refund</p>
            </div>
          </div>

          <div className="bg-yellow-500 text-black px-8 py-4 rounded-2xl inline-block font-bold text-xl">
            <div className="w-6 h-6 flex items-center justify-center mr-2 inline-block">
              <i className="ri-time-line"></i>
            </div>
            Next Draw: September 15, 2025
          </div>
        </div>
      </div>
    </section>
  );
}
