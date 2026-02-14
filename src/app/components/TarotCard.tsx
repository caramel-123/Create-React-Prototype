import { motion } from 'motion/react';
import { CardData } from '../context/GameContext';
import { Rarity } from '../data/messages';

interface TarotCardProps {
  card: CardData;
  index: number;
}

const cardIcons = {
  personality: '✨',
  color: '🎨',
  pet: '🐾',
  hobby: '🌟',
  crush: '💝',
};

const cardTitles = {
  personality: 'Personality',
  color: 'Color Spirit',
  pet: 'Pet Guardian',
  hobby: 'Passion Path',
  crush: 'Heart Connection',
};

const getRarityColor = (rarity: Rarity) => {
  switch (rarity) {
    case 'common':
      return 'from-pink-300 to-pink-400';
    case 'rare':
      return 'from-purple-400 to-pink-500';
    case 'legendary':
      return 'from-yellow-400 via-orange-400 to-red-500';
  }
};

const getRarityGlow = (rarity: Rarity) => {
  switch (rarity) {
    case 'common':
      return 'shadow-pink-300';
    case 'rare':
      return 'shadow-purple-400';
    case 'legendary':
      return 'shadow-yellow-400';
  }
};

export default function TarotCard({ card, index }: TarotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.2,
        duration: 0.6,
        type: "spring"
      }}
      className="perspective-1000"
    >
      <div className={`
        relative bg-white rounded-2xl p-6
        shadow-xl ${getRarityGlow(card.message.rarity)}
        border-4 bg-gradient-to-br ${getRarityColor(card.message.rarity)}
        min-h-[320px] flex flex-col
      `}>
        {/* Rarity indicator */}
        <div className="absolute top-3 right-3">
          <span className={`
            text-xs font-bold px-2 py-1 rounded-full
            ${card.message.rarity === 'common' ? 'bg-pink-100 text-pink-700' : ''}
            ${card.message.rarity === 'rare' ? 'bg-purple-100 text-purple-700' : ''}
            ${card.message.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-700' : ''}
          `}>
            {card.message.rarity.toUpperCase()}
          </span>
        </div>

        {/* Card icon */}
        <div className="text-5xl mb-4 text-center">
          {cardIcons[card.type]}
        </div>

        {/* Card title */}
        <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
          {cardTitles[card.type]}
        </h3>

        {/* User's choice */}
        {card.value && (
          <p className="text-center text-sm text-gray-600 mb-4 italic">
            "{card.value}"
          </p>
        )}

        {/* Message */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-center text-gray-700 leading-relaxed">
            {card.message.text}
          </p>
        </div>

        {/* Decorative sparkles */}
        {card.message.rarity === 'legendary' && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute text-yellow-300"
                style={{
                  left: `${20 + (i % 3) * 30}%`,
                  top: `${20 + Math.floor(i / 3) * 60}%`,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
