import { BrowserProvider } from 'ethers';

export async function connectWallet(): Promise<string> {
  if (!window.ethereum) {
    throw new Error('No Web3 wallet found');
  }

  const provider = new BrowserProvider(window.ethereum);
  const accounts = await provider.send('eth_requestAccounts', []);
  return accounts[0];
}