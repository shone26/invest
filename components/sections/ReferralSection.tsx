'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function ReferralSection() {
  const { userData } = useAuth();
  const [copied, setCopied] = useState(false);

  const referralCode = userData?.referralCode || 'REF123456';
  const referralLink = `${window.location.origin}/auth/register?ref=${referralCode}`;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Referral Program</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Your Referral Code</h3>
              <div className="flex items-center space-x-2">
                <div className="bg-white/10 rounded-lg px-4 py-2 flex-1 text-white font-mono">
                  {referralCode}
                </div>
                <button
                  onClick={() => copyToClipboard(referralCode)}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Referral Link</h3>
              <div className="flex items-center space-x-2">
                <div className="bg-white/10 rounded-lg px-4 py-2 flex-1 text-white text-sm break-all">
                  {referralLink}
                </div>
                <button
                  onClick={() => copyToClipboard(referralLink)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Referral Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">0</div>
                  <div className="text-sm text-gray-300">Total Referrals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$0.00</div>
                  <div className="text-sm text-gray-300">Total Earned</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Commission Rate</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">10%</div>
                <div className="text-sm text-gray-300">On every deposit</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Share Your Link</h4>
              <p className="text-gray-300 text-sm">Share your referral link with friends and family</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold text-white mb-2">They Sign Up</h4>
              <p className="text-gray-300 text-sm">Your friends register using your referral link</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Earn Commission</h4>
              <p className="text-gray-300 text-sm">Get 10% commission on their deposits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
