// components/Footer.tsx
'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="glass-effect mt-16 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="https://images.unsplash.com/photo-1574781330855-d0db2706b3d0?w=32&h=32&fit=crop&crop=center"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold gradient-text">SOTH Investment</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            &copy; 2025 SOTH Plantation Investment, Toronto, Canada. George Weston plantation investment Company
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
        </div>
      </div>
    </footer>
  );
}