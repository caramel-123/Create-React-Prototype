import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useGame } from '../context/GameContext';
import { getRandomMessage } from '../data/messages';

export default function Station1Name() {
  const navigate = useNavigate();
  const { setUserName, addCard } = useGame();
  const [name, setName] = useState('');

  const handleNext = () => {
    if (name.trim()) {
      setUserName(name);
      // Generate personality card
      const message = getRandomMessage();
      addCard({
        type: 'personality',
        message,
        value: name,
      });
      navigate('/reveal-1');
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
        <div className="bg-white rounded-3xl border-8 border-pink-400 p-8 md:p-10 shadow-2xl"
          style={{ 
            boxShadow: '0 10px 40px rgba(255, 105, 180, 0.4), 0 0 0 4px white',
          }}
        >
          {/* Station header */}
          <div className="text-center mb-6">
            <div className="text-yellow-400 text-4xl mb-3">★</div>
            <div className="text-pink-500 text-xl md:text-2xl mb-3 tracking-wider"
              style={{
                textShadow: '2px 2px 0px rgba(255,255,255,0.8)',
              }}
            >
              STATION 1
            </div>
            <p className="text-purple-700 text-xs md:text-sm leading-loose">
              ENTER YOUR NAME<br/>TO BEGIN
            </p>
          </div>

          {/* Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="YOUR NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNext()}
              className="w-full bg-gradient-to-r from-pink-50 to-purple-50 text-gray-800 border-4 border-purple-300 rounded-2xl px-5 py-4 text-sm focus:border-pink-400 focus:outline-none placeholder-purple-300"
              autoFocus
            />
          </div>

          {/* Button */}
          <button
            onClick={handleNext}
            disabled={!name.trim()}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 disabled:from-gray-300 disabled:to-gray-300 text-white px-6 py-4 text-sm rounded-full border-4 border-white tracking-wider transition-all shadow-lg"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            {name.trim() ? '► NEXT' : 'ENTER NAME'}
          </button>

          {/* Progress */}
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gray-200 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gray-200 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gray-200 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gray-200 border-4 border-white shadow-md"></div>
          </div>
          <p className="text-center text-purple-400 text-xs mt-3">STEP 1/5</p>
        </div>
      </motion.div>
    </div>
  );
}