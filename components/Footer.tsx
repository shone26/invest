// components/Footer.tsx
'use client';

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-sm mt-16 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">IP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              InvestPro
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            &copy; 2025 InvestPro Investment Platform. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <span>🔒</span>
              <span>SSL Secured</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🛡️</span>
              <span>Privacy Protected</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>⚡</span>
              <span>24/7 Support</span>
            </span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex justify-center space-x-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Disclosure</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
