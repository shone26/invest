'use client';

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const packages = [
  {
    id: 1,
    name: 'Package 1',
    icon: '💎',
    price: 20,
    dailyReturn: 6.6,
    totalProfit: 39.6,
    color: 'text-blue-300'
  },
  {
    id: 2,
    name: 'Bronze Package',
    icon: '🥉',
    investment: 250,
    dailyReturn: 8,
    duration: 70,
    totalReturn: 560,
    color: 'text-amber-600'
  },
  {
    id: 3,
    name: 'Silver Package',
    icon: '🥈',
    investment: 500,
    dailyReturn: 16,
    duration: 70,
    totalReturn: 1120,
    color: 'text-gray-400'
  },
  {
    id: 4,
    name: 'Gold Package',
    icon: '🥇',
    investment: 1000,
    dailyReturn: 35,
    duration: 70,
    totalReturn: 2450,
    color: 'text-yellow-400',
    popular: true
  },
  {
    id: 5,
    name: 'Platinum Package',
    icon: '💍',
    investment: 2500,
    dailyReturn: 90,
    duration: 70,
    totalReturn: 6300,
    color: 'text-purple-400'
  },
  {
    id: 6,
    name: 'Diamond Package',
    icon: '💎',
    investment: 5000,
    dailyReturn: 180,
    duration: 70,
    totalReturn: 12600,
    color: 'text-cyan-400'
  },
  {
    id: 7,
    name: 'Elite Package',
    icon: '👑',
    investment: 10000,
    dailyReturn: 380,
    duration: 70,
    totalReturn: 26600,
    color: 'text-red-400'
  },
  {
    id: 8,
    name: 'V.I.P Package',
    icon: '🌟',
    investment: 20000,
    dailyReturn: 800,
    duration: 70,
    totalReturn: 56000,
    color: 'text-yellow-300',
    exclusive: true
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function HomeSection() {
  const handlePackagePurchase = () => {
    toast.error('Balance insufficient! To purchase this package, you must first make a deposit.');
  };

  return (
    <section className="animate-fade-in-up">
      <div className="glass-effect rounded-2xl p-8 mb-8 card-hover">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold gradient-text mb-6 animate-float"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SOTH Plantation Investment
          </motion.h1>
          
          <motion.div 
            className="max-w-4xl mx-auto space-y-4 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="flex items-center justify-center gap-2">
              <span className="text-yellow-400">🤝</span> Hello! Welcome to SOTH_Plantation_Investment!
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-blue-400">🏢</span> We are a big Company
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-yellow-400">🥇</span> SOTH company owns the package here and has been in business for almost 9 years!
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-purple-400">🧠</span> People always want to know their future. The problem is that we can&apos;t predict it!
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-green-400">💸</span> But you can buy a package associated with our company and earn extra income. We will pay you 198% of the amount you invest in a short time.
            </p>
          </motion.div>
        </div>

        {/* Investment Packages Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className={`package-card rounded-xl p-6 text-center relative ${
                pkg.popular || pkg.exclusive ? 'animate-pulse-glow' : ''
              }`}
            >
              <div className="feature-icon text-2xl">{pkg.icon}</div>
              <h3 className={`text-2xl font-bold mb-4 ${pkg.color}`}>{pkg.name}</h3>
              
              {(pkg.popular || pkg.exclusive) && (
                <div className={`status-badge mb-4 ${pkg.popular ? 'status-online' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}>
                  {pkg.popular ? 'Popular' : 'Exclusive'}
                </div>
              )}
              
              <div className="space-y-2 mb-6">
                {pkg.price ? (
                  <>
                    <p className="text-gray-300">Price: <span className="font-bold text-white text-xl">{pkg.price} USDT</span></p>
                    <p className="text-gray-300">Daily Return: <span className="font-bold text-green-400">{pkg.dailyReturn} USDT</span></p>
                    <p className="text-gray-300">Total Profit: <span className="font-bold text-yellow-400">{pkg.totalProfit} USDT</span></p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-300">Investment: <span className="font-bold text-white text-xl">{pkg.investment} USDT</span></p>
                    <p className="text-gray-300">Daily Return: <span className="font-bold text-green-400">{pkg.dailyReturn} USDT</span></p>
                    <p className="text-gray-300">Duration: <span className="font-bold text-blue-400">{pkg.duration} Days</span></p>
                  </>
                )}
              </div>
              
              {pkg.totalReturn && (
                <div className="text-white text-xl font-bold mb-4 p-2 bg-gradient-to-r from-green-500/20 to-green-300/20 rounded-lg">
                  Total Return: {pkg.totalReturn} USDT
                </div>
              )}
              
              <motion.button
                className="btn-gradient w-full py-3 rounded-lg text-white font-semibold"
                onClick={handlePackagePurchase}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy Package
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}