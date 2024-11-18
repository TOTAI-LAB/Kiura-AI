import React from 'react';
import { Sparkles, Wallet } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

export default function Navbar() {
  const { address, isConnecting, connect } = useWallet();

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-purple-500 animate-rune" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text text-transparent">
              Kiura
            </span>
          </div>
          
          <button
            onClick={connect}
            disabled={isConnecting}
            className={`px-6 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 border ${
              address
                ? 'border-green-500/50 bg-green-500/10 hover:bg-green-500/20'
                : 'border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20'
            } ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Wallet className="h-5 w-5" />
            <span>
              {isConnecting
                ? 'Connecting...'
                : address
                ? `${address.slice(0, 6)}...${address.slice(-4)}`
                : 'Connect Wallet'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}