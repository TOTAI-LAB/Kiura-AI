import React from 'react';
import { Rocket, Star, Users, Gift } from 'lucide-react';

export default function Roadmap() {
  const milestones = [
    {
      icon: Rocket,
      title: 'Launch Phase',
      description: 'Initial release of AnimeAI with core features',
      date: 'Q1 2024'
    },
    {
      icon: Star,
      title: 'Enhanced AI',
      description: 'Advanced conversation capabilities and personality traits',
      date: 'Q2 2024'
    },
    {
      icon: Users,
      title: 'Community Features',
      description: 'User-generated content and social interactions',
      date: 'Q3 2024'
    },
    {
      icon: Gift,
      title: 'Rewards System',
      description: 'Implementation of token rewards and NFT collections',
      date: 'Q4 2024'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Journey
          </span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                  <milestone.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <div className="bg-purple-800 bg-opacity-30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-purple-200 mb-2">{milestone.description}</p>
                    <span className="text-pink-400 font-semibold">{milestone.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}