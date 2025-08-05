'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

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

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, phone?: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      // Mock sign in
      const mockUser: User = {
        uid: 'demo-user-123',
        email: email,
        displayName: 'Demo User'
      };
      
      const mockUserData: UserData = {
        fullName: 'Demo User',
        email: email,
        phone: '+1234567890',
        accountBalance: 1250.50,
        totalDeposited: 5000.00,
        totalWithdrawn: 750.00,
        activePackages: 2,
        referralCode: 'REF123456',
        createdAt: new Date().toISOString()
      };

      setUser(mockUser);
      setUserData(mockUserData);
    } catch (error: any) {
      throw new Error('Invalid credentials');
    }
  };

  const signUp = async (email: string, password: string, fullName: string, phone?: string) => {
    try {
      // Mock sign up
      const mockUser: User = {
        uid: 'demo-user-' + Date.now(),
        email: email,
        displayName: fullName
      };
      
      const mockUserData: UserData = {
        fullName,
        email,
        phone: phone || '',
        accountBalance: 0,
        totalDeposited: 0,
        totalWithdrawn: 0,
        activePackages: 0,
        referralCode: 'REF' + Math.random().toString(36).substr(2, 6).toUpperCase(),
        createdAt: new Date().toISOString()
      };

      setUser(mockUser);
      setUserData(mockUserData);
    } catch (error: any) {
      throw new Error('Registration failed');
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Mock Google sign in
      const mockUser: User = {
        uid: 'google-user-123',
        email: 'user@gmail.com',
        displayName: 'Google User'
      };
      
      const mockUserData: UserData = {
        fullName: 'Google User',
        email: 'user@gmail.com',
        phone: '',
        accountBalance: 500.00,
        totalDeposited: 1000.00,
        totalWithdrawn: 0,
        activePackages: 1,
        referralCode: 'REFGOOGLE',
        createdAt: new Date().toISOString()
      };

      setUser(mockUser);
      setUserData(mockUserData);
    } catch (error: any) {
      throw new Error('Google sign in failed');
    }
  };

  const signInWithFacebook = async () => {
    try {
      // Mock Facebook sign in
      const mockUser: User = {
        uid: 'facebook-user-123',
        email: 'user@facebook.com',
        displayName: 'Facebook User'
      };
      
      const mockUserData: UserData = {
        fullName: 'Facebook User',
        email: 'user@facebook.com',
        phone: '',
        accountBalance: 750.00,
        totalDeposited: 2000.00,
        totalWithdrawn: 250.00,
        activePackages: 1,
        referralCode: 'REFFB',
        createdAt: new Date().toISOString()
      };

      setUser(mockUser);
      setUserData(mockUserData);
    } catch (error: any) {
      throw new Error('Facebook sign in failed');
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      setUserData(null);
    } catch (error: any) {
      throw new Error('Failed to logout');
    }
  };

  const resetPassword = async (email: string) => {
    try {
      // Mock password reset
      console.log('Password reset email sent to:', email);
    } catch (error: any) {
      throw new Error('Failed to send reset email');
    }
  };

  const refreshUserData = async () => {
    // Mock refresh - in real app this would fetch from database
    if (user && userData) {
      setUserData({
        ...userData,
        accountBalance: userData.accountBalance + Math.random() * 10
      });
    }
  };

  const value: AuthContextType = {
    user,
    userData,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signInWithFacebook,
    logout,
    resetPassword,
    refreshUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
