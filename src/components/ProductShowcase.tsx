import React from 'react';
import { MessageCircle, Lock } from 'lucide-react';

interface ProductShowcaseProps {
  isWalletConnected: boolean;
}

export default function ProductShowcase({ isWalletConnected }: ProductShowcaseProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Meet Our AI Characters
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sakura',
              role: 'Friendly Guide',
              image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=400&h=400'
            },
            {
              name: 'Yuki',
              role: 'Meme Master',
              image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&q=80&w=400&h=400'
            },
            {
              name: 'Hiro',
              role: 'Tech Expert',
              image: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?auto=format&fit=crop&q=80&w=400&h=400'
            }
          ].map((character, index) => (
            <div
              key={character.name}
              className="bg-purple-800 bg-opacity-30 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{character.name}</h3>
                <p className="text-purple-200 mb-4">{character.role}</p>
                
                <button
                  disabled={!isWalletConnected}
                  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 ${
                    isWalletConnected
                      ? 'bg-pink-600 hover:bg-pink-700'
                      : 'bg-gray-600 cursor-not-allowed'
                  }`}
                >
                  {isWalletConnected ? (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      <span>Chat Now</span>
                    </>
                  ) : (
                    <>
                      <Lock className="h-5 w-5" />
                      <span>Connect Wallet to Chat</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}