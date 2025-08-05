'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import LoadingScreen from '@/components/LoadingScreen';
import HomeSection from '@/components/sections/HomeSection';
import DepositSection from '@/components/sections/DepositSection';
import WithdrawSection from '@/components/sections/WithdrawSection';
import UserSection from '@/components/sections/UserSection';
import ReferralSection from '@/components/sections/ReferralSection';
import OfferSection from '@/components/sections/OfferSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

type TabType = 'home' | 'deposit' | 'withdraw' | 'dividend' | 'user' | 'offer' | 'about' | 'contact';

export default function Dashboard() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('home');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return null;
  }

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <HomeSection />;
      case 'deposit':
        return <DepositSection />;
      case 'withdraw':
        return <WithdrawSection userData={userData} />;
      case 'dividend':
        return <ReferralSection />;
      case 'user':
        return <UserSection user={user} userData={userData} />;
      case 'offer':
        return <OfferSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-dark)' }}>
      <Header 
        user={user} 
        userData={userData} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderActiveSection()}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
