'use client';

export default function OfferSection() {
  const investmentPlans = [
    {
      name: 'Starter Plan',
      minAmount: 100,
      maxAmount: 999,
      dailyReturn: 2.5,
      duration: 30,
      totalReturn: 175,
      features: ['Daily Returns', 'Principal Back', '24/7 Support']
    },
    {
      name: 'Professional Plan',
      minAmount: 1000,
      maxAmount: 4999,
      dailyReturn: 3.0,
      duration: 30,
      totalReturn: 190,
      features: ['Daily Returns', 'Principal Back', 'Priority Support', 'Bonus 5%']
    },
    {
      name: 'Premium Plan',
      minAmount: 5000,
      maxAmount: 19999,
      dailyReturn: 3.5,
      duration: 30,
      totalReturn: 205,
      features: ['Daily Returns', 'Principal Back', 'VIP Support', 'Bonus 10%', 'Free Withdrawal']
    },
    {
      name: 'VIP Plan',
      minAmount: 20000,
      maxAmount: 100000,
      dailyReturn: 4.0,
      duration: 30,
      totalReturn: 220,
      features: ['Daily Returns', 'Principal Back', 'Dedicated Manager', 'Bonus 15%', 'Free Withdrawal', 'Custom Terms']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Investment Plans</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Choose from our carefully crafted investment plans designed to maximize your returns 
          while maintaining security and transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {investmentPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 ${
              index === 2 ? 'ring-2 ring-yellow-500/50 scale-105' : ''
            }`}
          >
            {index === 2 && (
              <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
            )}
            
            <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-300">Min Amount:</span>
                <span className="text-white font-semibold">${plan.minAmount.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-300">Max Amount:</span>
                <span className="text-white font-semibold">${plan.maxAmount.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-300">Daily Return:</span>
                <span className="text-green-400 font-semibold">{plan.dailyReturn}%</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-300">Duration:</span>
                <span className="text-white font-semibold">{plan.duration} days</span>
              </div>
              
              <div className="flex justify-between border-t border-white/20 pt-3">
                <span className="text-gray-300">Total Return:</span>
                <span className="text-yellow-400 font-bold">{plan.totalReturn}%</span>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <h4 className="text-sm font-semibold text-white">Features:</h4>
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mt-8">
        <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Investment Plans?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Guaranteed Returns</h4>
            <p className="text-gray-300 text-sm">All our investment plans come with guaranteed daily returns</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Secure Investment</h4>
            <p className="text-gray-300 text-sm">Your investments are protected with advanced security measures</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Instant Payouts</h4>
            <p className="text-gray-300 text-sm">Receive your daily returns instantly to your account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
