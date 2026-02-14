import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useGame } from '../context/GameContext';
import { getRandomMessage } from '../data/messages';

export default function Station5Crush() {
  const navigate = useNavigate();
  const { setCrushName, addCard } = useGame();
  const [crush, setCrush] = useState('');

  const handleReveal = () => {
    if (crush.trim()) {
      setCrushName(crush);
      const message = getRandomMessage();
      addCard({
        type: 'crush',
        message,
        value: crush,
      });
      navigate('/reveal-5');
    }
  };

  return (
    <div 
      className="h-screen w-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFE5F0 0%, #E5DEFF 50%, #D4F0FF 100%)',
        fontFamily: '"Press Start 2P", monospace',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="bg-white rounded-3xl border-8 border-red-400 p-8 md:p-10 shadow-2xl"
          style={{ 
            boxShadow: '0 10px 40px rgba(255, 105, 180, 0.5), 0 0 0 4px white',
          }}
        >
          <div className="text-center mb-6">
            <div className="text-purple-500 text-4xl mb-3">♠</div>
            <div className="text-red-500 text-xl md:text-2xl mb-3 tracking-wider"
              style={{
                textShadow: '2px 2px 0px rgba(255,255,255,0.8)',
              }}
            >
              STATION 5
            </div>
            <p className="text-purple-700 text-xs md:text-sm leading-loose">
              ENTER YOUR CRUSH/<br/>FAVORITE PERSON'S NAME
            </p>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="THEIR NAME"
              value={crush}
              onChange={(e) => setCrush(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleReveal()}
              className="w-full bg-gradient-to-r from-pink-50 to-red-50 text-gray-800 border-4 border-red-300 rounded-2xl px-5 py-4 text-sm focus:border-red-400 focus:outline-none placeholder-red-300"
              autoFocus
            />
          </div>

          <motion.button
            onClick={handleReveal}
            disabled={!crush.trim()}
            className="w-full bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-300 text-white px-6 py-5 text-sm md:text-base rounded-full border-4 border-white tracking-wider transition-all shadow-lg"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
            animate={crush.trim() ? {
              scale: [1, 1.02, 1],
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {crush.trim() ? '✨ REVEAL ALL CARDS ✨' : 'ENTER NAME'}
          </motion.button>

          <div className="mt-6 flex justify-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
          </div>
          <p className="text-center text-purple-400 text-xs mt-3">STEP 5/5</p>
        </div>
      </motion.div>
    </div>
  );
}
