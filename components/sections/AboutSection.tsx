'use client';

export default function AboutSection() {
  const stats = [
    { label: 'Active Investors', value: '10,000+', icon: '👥' },
    { label: 'Total Invested', value: '$50M+', icon: '💰' },
    { label: 'Countries', value: '150+', icon: '🌍' },
    { label: 'Years Experience', value: '5+', icon: '⭐' }
  ];

  const features = [
    {
      title: 'Secure Platform',
      description: 'Advanced encryption and security measures to protect your investments',
      icon: '🔒'
    },
    {
      title: 'Expert Team',
      description: 'Professional traders and analysts managing your investments',
      icon: '👨‍💼'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your queries',
      icon: '🎧'
    },
    {
      title: 'Instant Withdrawals',
      description: 'Quick and hassle-free withdrawal process',
      icon: '⚡'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">About InvestPro</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          We are a leading investment platform dedicated to helping individuals grow their wealth 
          through smart, secure, and profitable investment opportunities.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              At InvestPro, our mission is to democratize wealth creation by providing accessible, 
              transparent, and profitable investment opportunities for everyone, regardless of their 
              financial background or experience level.
            </p>
            <p>
              We believe that everyone deserves the opportunity to build financial security and 
              achieve their dreams through smart investing. Our platform combines cutting-edge 
              technology with expert financial management to deliver consistent returns.
            </p>
            <p>
              With a focus on transparency, security, and customer satisfaction, we've built a 
              trusted platform that has helped thousands of investors worldwide achieve their 
              financial goals.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Process */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Sign Up</h4>
            <p className="text-gray-300 text-sm">Create your account in minutes with our simple registration process</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Choose Plan</h4>
            <p className="text-gray-300 text-sm">Select an investment plan that matches your goals and budget</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Make Deposit</h4>
            <p className="text-gray-300 text-sm">Fund your account securely using various payment methods</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Earn Returns</h4>
            <p className="text-gray-300 text-sm">Watch your investment grow with daily returns and compound interest</p>
          </div>
        </div>
      </div>

      {/* Security & Trust */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-500/30">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Security & Trust</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Your security is our top priority. We employ industry-leading security measures 
            to protect your investments and personal information.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold text-white mb-2">SSL Encryption</h4>
              <p className="text-gray-300 text-sm">256-bit SSL encryption protects all data transmission</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl mb-2">🏦</div>
              <h4 className="font-semibold text-white mb-2">Regulated</h4>
              <p className="text-gray-300 text-sm">Licensed and regulated by financial authorities</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl mb-2">💎</div>
              <h4 className="font-semibold text-white mb-2">Insured Funds</h4>
              <p className="text-gray-300 text-sm">Your investments are protected by insurance coverage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
