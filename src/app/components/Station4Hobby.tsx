import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useGame } from '../context/GameContext';
import { getRandomMessage } from '../data/messages';

const hobbies = [
  { name: 'READING', emoji: '📚' },
  { name: 'PAINTING', emoji: '🎨' },
  { name: 'MUSIC', emoji: '🎵' },
  { name: 'DANCING', emoji: '💃' },
  { name: 'GAMING', emoji: '🎮' },
  { name: 'HIKING', emoji: '🥾' },
  { name: 'COOKING', emoji: '🍳' },
  { name: 'PHOTOGRAPHY', emoji: '📷' },
  { name: 'SPORTS', emoji: '⚽' },
  { name: 'WRITING', emoji: '✍️' },
];

export default function Station4Hobby() {
  const navigate = useNavigate();
  const { addCard } = useGame();
  const [selectedHobby, setSelectedHobby] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedHobby) {
      const message = getRandomMessage();
      addCard({
        type: 'hobby',
        message,
        value: selectedHobby,
      });
      navigate('/reveal-4');
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
        <div className="bg-white rounded-3xl border-8 border-blue-400 p-8 md:p-10 shadow-2xl"
          style={{ 
            boxShadow: '0 10px 40px rgba(181, 231, 255, 0.4), 0 0 0 4px white',
          }}
        >
          <div className="text-center mb-6">
            <div className="text-green-400 text-4xl mb-3">♣</div>
            <div className="text-blue-500 text-xl md:text-2xl mb-3 tracking-wider"
              style={{
                textShadow: '2px 2px 0px rgba(255,255,255,0.8)',
              }}
            >
              STATION 4
            </div>
            <p className="text-purple-700 text-xs md:text-sm leading-loose">
              CHOOSE YOUR<br/>FAVORITE HOBBY
            </p>
          </div>

          <div className="grid grid-cols-5 gap-3 mb-6">
            {hobbies.map((hobby) => (
              <button
                key={hobby.name}
                onClick={() => setSelectedHobby(hobby.name)}
                className={`aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl border-4 transition-all shadow-lg flex items-center justify-center ${
                  selectedHobby === hobby.name 
                    ? 'border-blue-400 scale-110 ring-4 ring-blue-300' 
                    : 'border-white hover:scale-105'
                }`}
                title={hobby.name}
              >
                <div className="text-4xl">{hobby.emoji}</div>
              </button>
            ))}
          </div>

          {selectedHobby && (
            <div className="text-center text-blue-700 text-xs mb-4 bg-blue-100 py-2 rounded-full">
              ► {selectedHobby}
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!selectedHobby}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 disabled:from-gray-300 disabled:to-gray-300 text-white px-6 py-4 text-sm rounded-full border-4 border-white tracking-wider transition-all shadow-lg"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            {selectedHobby ? '► NEXT' : 'SELECT HOBBY'}
          </button>

          <div className="mt-6 flex justify-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-4 border-white shadow-md"></div>
            <div className="w-4 h-4 rounded-full bg-gray-200 border-4 border-white shadow-md"></div>
          </div>
          <p className="text-center text-purple-400 text-xs mt-3">STEP 4/5</p>
        </div>
      </motion.div>
    </div>
  );
}
