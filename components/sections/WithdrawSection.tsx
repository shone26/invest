'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface WithdrawFormData {
  amount: number;
  address: string;
}

interface UserData {
  accountBalance: number;
}

interface WithdrawSectionProps {
  userData: UserData | null;
}

export default function WithdrawSection({ userData }: WithdrawSectionProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<WithdrawFormData>();

  const amount = watch('amount');
  const currentBalance = userData?.accountBalance || 0;

  const onSubmit = async (data: WithdrawFormData) => {
    if (data.amount < 5) {
      toast.error('Minimum withdrawal amount is 5 USDT.');
      return;
    }

    if (data.amount > currentBalance) {
      toast.error(`Insufficient balance. Your current balance is ${currentBalance.toFixed(2)} USDT.`);
      return;
    }

    if (!data.address.startsWith('0x') || data.address.length < 20) {
      toast.error('Please enter a valid USDT BEP20 address.');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Withdrawal request submitted! Please wait for processing.');
      reset();
    } catch (error) {
      toast.error('Failed to process withdrawal. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="animate-fade-in-up">
      <div className="glass-effect rounded-2xl p-8 mb-8 card-hover">
        <div className="text-center mb-8">
          <motion.h2 
            className="text-4xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Withdraw Profits
          </motion.h2>
          <motion.p 
            className="text-xl text-red-400 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Withdrawals are processed in USDT BEP20 only.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="glass-effect rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Withdrawal Details</h3>
            
            <div className="text-center mb-6">
              <p className="text-gray-300 text-lg">Available Balance:</p>
              <motion.p 
                className="text-4xl font-bold text-green-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {currentBalance.toFixed(2)}
              </motion.p>
              <p className="text-gray-400">USDT</p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Amount (USDT)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="5"
                  {...register('amount', {
                    required: 'Amount is required',
                    min: {
                      value: 5,
                      message: 'Minimum withdrawal amount is 5 USDT'
                    },
                    max: {
                      value: currentBalance,
                      message: 'Amount exceeds available balance'
                    }
                  })}
                  className="input-field"
                  placeholder="Minimum 5 USDT"
                />
                {errors.amount && (
                  <p className="error-message">{errors.amount.message}</p>
                )}
                {amount && amount > currentBalance && (
                  <p className="error-message">Insufficient balance</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  USDT BEP20 Address
                </label>
                <input
                  type="text"
                  {...register('address', {
                    required: 'Wallet address is required',
                    pattern: {
                      value: /^0x[a-fA-F0-9]{40}$/,
                      message: 'Please enter a valid BEP20 address'
                    }
                  })}
                  className="input-field text-sm font-mono"
                  placeholder="Your USDT BEP20 wallet address"
                />
                {errors.address && (
                  <p className="error-message">{errors.address.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isProcessing || currentBalance <= 0}
                className="btn-gradient w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
              >
                <span>{isProcessing ? 'Processing...' : 'Withdraw Now'}</span>
                {isProcessing && <div className="loading-spinner"></div>}
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="glass-effect rounded-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Withdrawal Policy</h3>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 text-lg">🔒</span>
                <p>You can only withdraw funds to USDT BEP20 addresses.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">🎯</span>
                <p>Double-check your address carefully. Funds sent to an incorrect address cannot be recovered.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 text-lg">⚡</span>
                <p>Your withdrawal request will usually be processed within 10-15 minutes.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 text-lg">💸</span>
                <p>We do not charge a fee for withdrawals under $30.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-red-400 text-lg">💰</span>
                <p>We will charge a $2 fee for any withdrawal over $30.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-orange-400 text-lg">🆘</span>
                <p>For any issues, please contact our customer service with your user ID.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}