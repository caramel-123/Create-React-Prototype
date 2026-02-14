import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CardData } from '../context/GameContext';
import { Rarity } from '../data/messages';

interface CardRevealAnimationProps {
  card: CardData;
  nextRoute: string;
  stationNumber: number;
}

const getRarityColor = (rarity: Rarity) => {
  switch (rarity) {
    case 'common':
      return '#d4d4d4ff';
    case 'rare':
      return '#81d175ff';
    case 'legendary':
      return '#37a0ebff';
  }
};

const getRarityBg = (rarity: Rarity) => {
  switch (rarity) {
    case 'common':
      return 'bg-pink-300';
    case 'rare':
      return 'bg-purple-300';
    case 'legendary':
      return 'bg-yellow-300';
  }
};

const cardIcons = {
  personality: '★',
  color: '♦',
  pet: '♥',
  hobby: '♣',
  crush: '♠',
};

export default function CardRevealAnimation({ card, nextRoute, stationNumber }: CardRevealAnimationProps) {
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              opacity: 0.3,
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
            style={{ color: ['#FFB3D9', '#C8B6FF', '#B5E7FF'][Math.floor(Math.random() * 3)] }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* "NEW CARD!" text */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="text-purple-600 text-2xl md:text-3xl tracking-wider mb-2 text-center"
            style={{
              textShadow: '3px 3px 0px rgba(255,255,255,0.8), -1px -1px 0px rgba(0,0,0,0.1)',
            }}
          >
            CARD {stationNumber}/5
          </div>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-pink-500 text-xl md:text-2xl tracking-wider text-center"
            style={{
              textShadow: '2px 2px 0px #fff',
            }}
          >
            ★ NEW CARD! ★
          </motion.div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: showCard ? 1 : 0, rotateY: showCard ? 0 : 180 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative mb-8"
        >
          <div 
            className="relative border-8 rounded-3xl p-6 w-80 md:w-96 bg-white"
            style={{
              borderColor: getRarityColor(card.message.rarity),
              boxShadow: `0 8px 30px ${getRarityColor(card.message.rarity)}, 0 0 0 4px white`,
            }}
          >
            {/* Rarity badge */}
            <div className={`absolute -top-5 left-1/2 -translate-x-1/2 ${getRarityBg(card.message.rarity)} px-6 py-2 rounded-full border-4 border-white shadow-lg`}>
              <div className="text-gray-800 text-xs tracking-wider font-bold">
                {card.message.rarity.toUpperCase()}
              </div>
            </div>

            {/* Card icon */}
            <div className="text-center mb-4 mt-2">
              <div 
                className="text-6xl md:text-7xl inline-block"
                style={{ 
                  color: getRarityColor(card.message.rarity),
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
                }}
              >
                {cardIcons[card.type]}
              </div>
            </div>

            {/* Message - highlighted and readable */}
            <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-5 rounded-2xl mb-4 border-4 border-white shadow-inner">
              <p className="text-gray-800 text-sm md:text-base leading-relaxed text-center font-bold"
                style={{
                  textShadow: '1px 1px 0px rgba(255,255,255,0.8)',
                  lineHeight: '1.8',
                }}
              >
                "{card.message.text}"
              </p>
            </div>

            {/* Value display */}
            {card.value && (
              <div className="text-center text-gray-600 text-xs bg-gray-100 py-2 rounded-full">
                {card.value}
              </div>
            )}

            {/* Decorative corners */}
            <div className="absolute -top-3 -left-3 text-3xl" style={{ color: getRarityColor(card.message.rarity) }}>✦</div>
            <div className="absolute -top-3 -right-3 text-3xl" style={{ color: getRarityColor(card.message.rarity) }}>✦</div>
            <div className="absolute -bottom-3 -left-3 text-3xl" style={{ color: getRarityColor(card.message.rarity) }}>✦</div>
            <div className="absolute -bottom-3 -right-3 text-3xl" style={{ color: getRarityColor(card.message.rarity) }}>✦</div>
          </div>

          {/* Sparkles for legendary */}
          {card.message.rarity === 'legendary' && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute text-yellow-400 text-3xl"
                  style={{
                    left: `${10 + (i % 4) * 25}%`,
                    top: `${10 + Math.floor(i / 4) * 80}%`,
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Continue button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showCard ? 1 : 0, y: showCard ? 0 : 20 }}
          transition={{ delay: 0.8 }}
          onClick={() => navigate(nextRoute)}
          className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 text-sm md:text-base rounded-full border-4 border-white tracking-wider transition-all shadow-lg"
          style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          ► CONTINUE
        </motion.button>

        {/* Progress dots */}
        <div className="mt-6 flex gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-4 border-white shadow-md ${
                i < stationNumber 
                  ? 'bg-gradient-to-br from-pink-400 to-purple-400' 
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}