'use client';

import Image from 'next/image';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-dark flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="h-16 w-16 rounded-full ring-2 ring-primary-500/30 mx-auto animate-pulse">
            <Image
              src="https://images.unsplash.com/photo-1574781330855-d0db2706b3d0?w=64&h=64&fit=crop&crop=center"
              alt="SOTH Logo"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full animate-ping"></div>
        </div>
        <h2 className="text-2xl font-bold gradient-text mb-2">SOTH Investment</h2>
        <p className="text-gray-400 mb-6">Verifying authentication...</p>
        <div className="loading-spinner mx-auto"></div>
      </div>
    </div>
  );
}