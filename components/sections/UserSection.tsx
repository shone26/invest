'use client';

import { User } from 'firebase/auth';

interface UserData {
  fullName?: string;
  email: string;
  phone?: string;
  accountBalance: number;
  totalDeposited: number;
  totalWithdrawn: number;
  activePackages: number;
  referralCode?: string;
  createdAt: string;
}

interface UserSectionProps {
  user: User | null;
  userData: UserData | null;
}

export default function UserSection({ user, userData }: UserSectionProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">User Profile</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <div className="bg-white/5 rounded-lg p-3 text-white">
                {userData?.fullName || user?.displayName || 'Not provided'}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <div className="bg-white/5 rounded-lg p-3 text-white">
                {userData?.email || user?.email}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Phone
              </label>
              <div className="bg-white/5 rounded-lg p-3 text-white">
                {userData?.phone || 'Not provided'}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Account Balance
              </label>
              <div className="bg-green-500/20 rounded-lg p-3 text-green-400 font-semibold">
                ${userData?.accountBalance?.toFixed(2) || '0.00'}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Total Deposited
              </label>
              <div className="bg-blue-500/20 rounded-lg p-3 text-blue-400 font-semibold">
                ${userData?.totalDeposited?.toFixed(2) || '0.00'}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Total Withdrawn
              </label>
              <div className="bg-purple-500/20 rounded-lg p-3 text-purple-400 font-semibold">
                ${userData?.totalWithdrawn?.toFixed(2) || '0.00'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Active Packages
              </label>
              <div className="bg-yellow-500/20 rounded-lg p-3 text-yellow-400 font-semibold">
                {userData?.activePackages || 0}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Member Since
              </label>
              <div className="bg-white/5 rounded-lg p-3 text-white">
                {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'N/A'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
