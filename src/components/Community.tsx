import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';

export default function Community() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Join Our Community
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="#twitter"
            className="bg-purple-800 bg-opacity-30 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 flex items-center space-x-4"
          >
            <Twitter className="h-8 w-8 text-blue-400" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Twitter</h3>
              <p className="text-purple-200">Follow us for the latest updates and memes</p>
            </div>
          </a>
          
          <a
            href="#telegram"
            className="bg-purple-800 bg-opacity-30 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 flex items-center space-x-4"
          >
            <MessageCircle className="h-8 w-8 text-blue-400" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Telegram</h3>
              <p className="text-purple-200">Join our active community chat</p>
            </div>
          </a>
        </div>
        
        <div className="mt-16 bg-purple-800 bg-opacity-30 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Latest Community Memes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={`https://images.unsplash.com/photo-156789${i}234567-abc${i}?auto=format&fit=crop&q=80`}
                  alt={`Community Meme ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}