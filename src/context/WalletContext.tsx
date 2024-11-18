import React, { createContext, useContext, useState } from 'react';
import { connectWallet } from '../utils/web3';
import { toast } from 'react-hot-toast';

interface WalletContextType {
  address: string | null;
  isConnecting: boolean;
  connect: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  isConnecting: false,
  connect: async () => {},
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = async () => {
    try {
      setIsConnecting(true);
      const userAddress = await connectWallet();
      setAddress(userAddress);
      toast.success('Wallet connected successfully!');
    } catch (error) {
      toast.error('Failed to connect wallet');
      console.error(error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <WalletContext.Provider value={{ address, isConnecting, connect }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}