import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full py-8 bg-black/50 backdrop-blur-sm border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          <a
            href="https://twitter.com/kiura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-purple-400 transition-colors duration-300"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://t.me/kiura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-purple-400 transition-colors duration-300"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/kiura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-purple-400 transition-colors duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}