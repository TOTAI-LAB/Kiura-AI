import React from 'react';
import { Toaster } from 'react-hot-toast';
import { WalletProvider } from './context/WalletContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <WalletProvider>
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black text-white overflow-hidden">
        <BackgroundElements />
        <Toaster position="top-right" />
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;