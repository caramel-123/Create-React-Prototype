import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useGame } from '../context/GameContext';
import { getRandomMessage } from '../data/messages';

const colors = [
  { name: 'RED', hex: '#FF6B6B' },
  { name: 'YELLOW', hex: '#FFD93D' },
  { name: 'BLUE', hex: '#6BCFFF' },
  { name: 'GREEN', hex: '#95E1D3' },
  { name: 'PINK', hex: '#FFB3D9' },
  { name: 'PURPLE', hex: '#C8B6FF' },
  { name: 'ORANGE', hex: '#FFAB73' },
  { name: 'WHITE', hex: '#F8F9FA' },
  { name: 'BLACK', hex: '#495057' },
  { name: 'TEAL', hex: '#87DFD6' },
];

export default function Station2Color() {
  const navigate = useNavigate();
  const { addCard } = useGame();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedColor) {
      const message = getRandomMessage();
      addCard({
        type: 'color',
        message,
        value: selectedColor,
      });
      navigate('/reveal-2');
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
        className="relative z-10 w-full max-w-lg px-6"
      >
        <div className="bg-white rounded-3xl border-8 border-purple-400 p-8 md:p-10 shadow-2xl"
          style={{ 
            boxShadow: '0 10px 40px rgba(200, 182, 255, 0.4), 0 0 0 4px white',
          }}
        >
          <div className="text-center mb-6">
            <div className="text-pink-400 text-4xl mb-3">♦</div>
            <div className="text-purple-500 text-xl md:text-2xl mb-3 tracking-wider"
              style={{
                textShadow: '2px 2px 0px rgba(255,255,255,0.8)',
              }}
            >
              STATION 2
            </div>
            <p className="text-purple-700 text-xs md:text-sm leading-loose">
              CHOOSE YOUR<br/>FAVORITE COLOR
            </p>
          </div>

          <div className="grid grid-cols-5 gap-3 mb-6">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`aspect-square rounded-2xl border-4 transition-all shadow-lg ${
                  selectedColor === color.name 
                    ? 'border-white scale-110 ring-4 ring-purple-400' 
                    : 'border-white hover:scale-105'
                }`}
                style={{ 
                  backgroundColor: color.hex,
                }}
                title={color.name}
              >
                {selectedColor === color.name && (
                  <div className="text-white text-2xl drop-shadow-lg">✓</div>
                )}
              </button>
            ))}
          </div>

          {selectedColor && (
            <div className="text-center text-purple-700 text-xs mb-4 bg-purple-100 py-2 rounded-full">
              ► {selectedColor}
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!selectedColor}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 disabled:from-gray-300 disabled:to-gray-300 text-white px-6 py-4 text-sm rounded-full border-4 border-white tracking-wider transition-all shadow-lg"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            {selectedColor ? '► NEXT' : 'SELECT COLOR'}
          </button>

          <div className="mt-6 flex justify-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gray-200 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gray-200 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gray-200 border-4 border-white shadow-md"></div>
          </div>
          <p className="text-center text-purple-400 text-xs mt-3">STEP 2/5</p>
        </div>
      </motion.div>
    </div>
  );
}
