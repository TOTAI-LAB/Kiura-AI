import React, { useState } from 'react';
import { Gift, Trophy, Share2, Users } from 'lucide-react';
import { useWallet } from '../context/WalletContext';
import { getReferralLink } from '../utils/web3';
import { toast } from 'react-hot-toast';

export default function ReferralSystem() {
  const { address } = useWallet();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    if (!address) return;
    
    const link = getReferralLink(address);
    await navigator.clipboard.writeText(link);
    setCopied(true);
    toast.success('Referral link copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Refer & Earn Rewards
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Share2,
              title: 'Share',
              description: 'Invite friends using your unique referral link'
            },
            {
              icon: Users,
              title: 'Connect',
              description: 'Friends join using your referral code'
            },
            {
              icon: Gift,
              title: 'Earn',
              description: 'Get exclusive rewards for each referral'
            }
          ].map((step) => (
            <div
              key={step.title}
              className="bg-purple-800 bg-opacity-30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <step.icon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-purple-200">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-purple-800 bg-opacity-30 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Top Referrers</h3>
          <div className="space-y-4">
            {[
              { name: 'AnimeKing', points: 1500 },
              { name: 'MemeQueen', points: 1200 },
              { name: 'Web3Master', points: 900 }
            ].map((user, index) => (
              <div
                key={user.name}
                className="flex items-center justify-between p-4 bg-purple-700 bg-opacity-30 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Trophy className={`h-6 w-6 ${
                    index === 0 ? 'text-yellow-400' :
                    index === 1 ? 'text-gray-300' :
                    'text-yellow-700'
                  }`} />
                  <span className="font-semibold">{user.name}</span>
                </div>
                <span className="text-purple-200">{user.points} points</span>
              </div>
            ))}
          </div>
          
          {address ? (
            <div className="mt-8 text-center">
              <p className="mb-4">Your Referral Link:</p>
              <div className="bg-purple-700 bg-opacity-30 p-4 rounded-lg flex items-center justify-between">
                <code className="text-purple-200">{getReferralLink(address)}</code>
                <button
                  onClick={handleCopyLink}
                  className={`${
                    copied ? 'bg-green-600' : 'bg-pink-600 hover:bg-pink-700'
                  } px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300`}
                >
                  <Share2 className="h-5 w-5" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-8 text-center">
              <p className="text-purple-200">Connect your wallet to get your referral link</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}