import { useNavigate } from 'react-router';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div 
      className="h-screen w-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFE5F0 0%, #E5DEFF 50%, #D4F0FF 100%)',
        fontFamily: '"Press Start 2P", monospace',
      }}
    >
      {/* Floating hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              opacity: 0.4,
            }}
            animate={{
              y: -100,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-6xl"
            style={{ color: ['#FFB3D9', '#C8B6FF', '#B5E7FF', '#FFE5A0'][Math.floor(Math.random() * 4)] }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            animate={{ 
              textShadow: [
                '4px 4px 0px rgba(255,255,255,0.8)',
                '4px 4px 0px rgba(255,255,255,1)',
                '4px 4px 0px rgba(255,255,255,0.8)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-6xl text-pink-500 mb-6 tracking-wider"
          >
            5LENTINE'S
          </motion.h1>
          
          <div className="text-7xl md:text-9xl mb-8">💖</div>
        </motion.div>
        
        <p className="text-purple-700 text-sm md:text-base mb-12 max-w-lg mx-auto leading-loose"
          style={{
            textShadow: '2px 2px 0px rgba(255,255,255,0.6)',
          }}
        >
          DISCOVER YOUR<br/>VALENTINE TAROT CARDS<br/>AND YOUR LOVE VIBES!
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => navigate('/station-1')}
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-10 py-5 text-sm md:text-base rounded-full border-4 border-white tracking-wider transition-all shadow-2xl"
            style={{ 
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            ► START
          </button>
        </motion.div>
      </div>
    </div>
  );
}