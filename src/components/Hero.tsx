import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

export default function Hero() {
  const { address } = useWallet();

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-glow font-[Cinzel]">
          <span className="bg-gradient-to-r from-purple-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
            Kiura
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-12 text-purple-200 animate-float">
          Unveiling the Shadows of AI and Mystery
          <Sparkles className="inline-block ml-2 h-8 w-8 text-yellow-400 animate-pulse" />
        </p>

        {address ? (
          <a
            href="/chat"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-purple-500/20 border border-purple-500/50 hover:bg-purple-500/30 transition-all duration-300 animate-glow group"
          >
            <MessageSquare className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            Access Kiura
          </a>
        ) : (
          <p className="text-purple-200/70 text-lg animate-pulse">
            Connect your wallet to access Kiura
          </p>
        )}
      </div>
    </div>
  );
}