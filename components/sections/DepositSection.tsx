'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface DepositFormData {
  amount: number;
  screenshot: FileList;
}

export default function DepositSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const depositAddress = "0xYourBEP20DepositAddressHere";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<DepositFormData>();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Address copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy address');
    }
  };

  const onSubmit = async (data: DepositFormData) => {
    if (data.amount < 20) {
      toast.error('Minimum deposit amount is 20 USDT.');
      return;
    }

    if (!data.screenshot || data.screenshot.length === 0) {
      toast.error('Please upload a screenshot of your deposit.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast.success('Deposit submitted successfully! Please wait for confirmation.');
      reset();
    } catch (error) {
      toast.error('Failed to submit deposit. Please try again.');
    } finally {
      setIsSubmitting(false);
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
            Deposit Funds
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Deposit USDT (BEP20 Network) to start your investment.
          </motion.p>
        </div>

        <motion.div 
          className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-yellow-300 text-center font-semibold mb-4">
            Please send USDT BEP20 to the following address:
          </p>
          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              value={depositAddress}
              className="input-field flex-grow font-mono text-sm bg-dark-700/50" 
              readOnly 
            />
            <motion.button 
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'btn-gradient text-white hover:from-primary-600 hover:to-secondary-600'
              }`}
              onClick={() => copyToClipboard(depositAddress)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="glass-effect rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Deposit Details</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Amount (USDT)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="20"
                  {...register('amount', {
                    required: 'Amount is required',
                    min: {
                      value: 20,
                      message: 'Minimum deposit amount is 20 USDT'
                    }
                  })}
                  className="input-field"
                  placeholder="Minimum $20"
                />
                {errors.amount && (
                  <p className="error-message">{errors.amount.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Screenshot of Deposit
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register('screenshot', {
                    required: 'Screenshot is required'
                  })}
                  className="input-field p-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-500 file:text-white hover:file:bg-primary-600"
                />
                {errors.screenshot && (
                  <p className="error-message">{errors.screenshot.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit Deposit'}</span>
                {isSubmitting && <div className="loading-spinner"></div>}
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="glass-effect rounded-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Important Notes</h3>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 text-lg">⚡</span>
                <p>Please make sure that you send USDT over the BEP20 (Binance Smart Chain) network.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-red-400 text-lg">⚠️</span>
                <p>Funds can be lost by sending through other networks.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-400 text-lg">📄</span>
                <p>After your transaction, please make sure to send us your transaction ID (TXID) and a screenshot of the successful transaction for quick verification.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">⏱️</span>
                <p>Deposits usually reflect within 5-10 minutes, but will take longer depending on the network congestion.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 text-lg">💰</span>
                <p>Minimum deposit amount is 20 USDT.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 text-lg">💬</span>
                <p>For any questions or inquiries, please contact our customer support.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}