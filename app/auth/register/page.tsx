'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface RegisterFormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
  agreeTerms: boolean;
  marketingEmails: boolean;
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, signInWithGoogle, signInWithFacebook, user } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<RegisterFormData>();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  useEffect(() => {
    if (password) {
      setPasswordStrength(calculatePasswordStrength(password));
    } else {
      setPasswordStrength(0);
    }
  }, [password]);

  const calculatePasswordStrength = (pwd: string): number => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) strength++;
    return strength;
  };

  const getStrengthLabel = (): string => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
      case 3:
        return 'Fair';
      case 4:
        return 'Good';
      case 5:
        return 'Strong';
      default:
        return 'Weak';
    }
  };

  const getStrengthColor = (): string => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return 'bg-red-500';
      case 2:
      case 3:
        return 'bg-yellow-500';
      case 4:
        return 'bg-blue-500';
      case 5:
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStrengthWidth = (): string => {
    return `${(passwordStrength / 5) * 100}%`;
  };

  const onSubmit = async (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    if (passwordStrength < 2) {
      toast.error('Please choose a stronger password.');
      return;
    }

    setIsLoading(true);
    try {
      await signUp(data.email, data.password, data.fullName, data.phone);
      toast.success('Account created successfully! Welcome to SOTH Investment!');
      router.push('/');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      toast.success('Google registration successful!');
      router.push('/');
    } catch (error: any) {
      toast.error('Google registration failed. Please try again.');
    }
  };

  const handleFacebookSignUp = async () => {
    try {
      await signInWithFacebook();
      toast.success('Facebook registration successful!');
      router.push('/');
    } catch (error: any) {
      toast.error('Facebook registration failed. Please try again.');
    }
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length >= 6) {
      return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (phoneNumber.length >= 3) {
      return phoneNumber.replace(/(\d{3})(\d{0,3})/, '($1) $2');
    }
    return phoneNumber;
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative animate-float">
              <Image
                src="https://images.unsplash.com/photo-1574781330855-d0db2706b3d0?w=64&h=64&fit=crop&crop=center"
                alt="SOTH Logo"
                width={64}
                height={64}
                className="rounded-full ring-2 ring-primary-500/30"
              />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
          <motion.h1 
            className="text-3xl font-bold gradient-text mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Join SOTH Investment
          </motion.h1>
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Create your account and start investing today
          </motion.p>
        </div>

        {/* Registration Form */}
        <motion.div 
          className="glass-effect rounded-2xl p-8 animate-pulse-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <span className="flex items-center space-x-2">
                  <span>👤</span>
                  <span>Full Name</span>
                </span>
              </label>
              <input
                type="text"
                {...register('fullName', {
                  required: 'Full name is required',
                  minLength: {
                    value: 2,
                    message: 'Full name must be at least 2 characters'
                  }
                })}
                className="input-field"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="error-message">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <span className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>Email Address</span>
                </span>
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address'
                  }
                })}
                className="input-field"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <span className="flex items-center space-x-2">
                  <span>📱</span>
                  <span>Phone Number</span>
                </span>
              </label>
              <input
                type="tel"
                {...register('phone', {
                  required: 'Phone number is required',
                  onChange: (e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    setValue('phone', formatted);
                  }
                })}
                className="input-field"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="error-message">{errors.phone.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <span className="flex items-center space-x-2">
                  <span>🔒</span>
                  <span>Password</span>
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  className="input-field pr-12"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <span>{showPassword ? '🙈' : '👁️'}</span>
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-2">
                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${getStrengthColor()}`}
                      style={{ width: getStrengthWidth() }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Password strength: <span className={passwordStrength >= 4 ? 'text-green-400' : passwordStrength >= 2 ? 'text-yellow-400' : 'text-red-400'}>{getStrengthLabel()}</span>
                  </p>
                </div>
              )}
              
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <span className="flex items-center space-x-2">
                  <span>🔐</span>
                  <span>Confirm Password</span>
                </span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password'
                  })}
                  className="input-field pr-12"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <span>{showConfirmPassword ? '🙈' : '👁️'}</span>
                </button>
              </div>
              
              {confirmPassword && password && (
                <p className={`text-xs mt-1 ${confirmPassword === password ? 'text-green-400' : 'text-red-400'}`}>
                  {confirmPassword === password ? 'Passwords match ✓' : 'Passwords do not match ✗'}
                </p>
              )}
              
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Referral Code Field */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <span className="flex items-center space-x-2">
                  <span>🎁</span>
                  <span>Referral Code (Optional)</span>
                </span>
              </label>
              <input
                type="text"
                {...register('referralCode')}
                className="input-field"
                placeholder="Enter referral code if you have one"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                {...register('agreeTerms', {
                  required: 'You must agree to the terms and conditions'
                })}
                className="mt-1 rounded border-gray-600 bg-gray-700 text-primary-500 focus:ring-primary-500"
              />
              <label className="text-sm text-gray-400 leading-relaxed">
                I agree to the{' '}
                <Link href="#" className="text-primary-400 hover:text-primary-300">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-primary-400 hover:text-primary-300">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="error-message">{errors.agreeTerms.message}</p>
            )}

            {/* Marketing Emails */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                {...register('marketingEmails')}
                className="mt-1 rounded border-gray-600 bg-gray-700 text-primary-500 focus:ring-primary-500"
              />
              <label className="text-sm text-gray-400 leading-relaxed">
                I would like to receive investment tips and market updates via email
              </label>
            </div>

            {/* Register Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="btn-gradient w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center space-x-2 disabled:opacity-50"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              <span>{isLoading ? 'Creating Account...' : 'Create Account'}</span>
              {isLoading && <div className="loading-spinner"></div>}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-dark-800/50 text-gray-400">Or register with</span>
            </div>
          </div>

          {/* Social Registration Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <motion.button
              onClick={handleGoogleSignUp}
              className="flex items-center justify-center space-x-2 p-3 border border-gray-600/50 rounded-lg hover:bg-gray-700/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>🔍</span>
              <span className="text-sm text-gray-300">Google</span>
            </motion.button>
            <motion.button
              onClick={handleFacebookSignUp}
              className="flex items-center justify-center space-x-2 p-3 border border-gray-600/50 rounded-lg hover:bg-gray-700/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>📘</span>
              <span className="text-sm text-gray-300">Facebook</span>
            </motion.button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-primary-400 hover:text-primary-300 font-semibold transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div 
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center justify-center space-x-2">
            <span>←</span>
            <span>Back to Homepage</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}