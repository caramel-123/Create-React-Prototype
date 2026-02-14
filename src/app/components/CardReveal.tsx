import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useGame } from '../context/GameContext';
import { getRarityPoints, Rarity } from '../data/messages';

const cardIcons = {
  personality: '★',
  color: '♦',
  pet: '♥',
  hobby: '♣',
  crush: '♠',
};

const cardTitles = {
  personality: 'PERSONALITY',
  color: 'COLOR SPIRIT',
  pet: 'PET GUARDIAN',
  hobby: 'PASSION PATH',
  crush: 'HEART LINK',
};

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

export default function CardReveal() {
  const navigate = useNavigate();
  const { cards, userName, crushName, resetGame } = useGame();

  const totalPoints = cards.reduce((sum, card) => sum + getRarityPoints(card.message.rarity), 0);
  const ranking = Math.round((totalPoints / 15) * 10);

  const handleRestart = () => {
    resetGame();
    navigate('/');
  };

  return (
    <div 
      className="min-h-screen w-screen flex items-center justify-center overflow-auto py-8"
      style={{
        background: 'linear-gradient(180deg, #FFE5F0 0%, #E5DEFF 50%, #D4F0FF 100%)',
        fontFamily: '"Press Start 2P", monospace',
      }}
    >
      {/* Floating hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              opacity: 0.2,
            }}
            animate={{
              y: -100,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
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

      <div className="relative z-10 w-full max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-pink-500 text-xl md:text-3xl mb-2 tracking-wider"
            style={{
              textShadow: '3px 3px 0px rgba(255,255,255,0.8)',
            }}
          >
            {userName.toUpperCase()}'S CARDS
          </h1>
          <p className="text-purple-600 text-xs md:text-sm">
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-5 gap-2 md:gap-4 mb-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.2, type: 'spring' }}
              className="relative"
            >
              <div 
                className="border-4 md:border-6 rounded-2xl p-2 md:p-4 bg-white shadow-lg"
                style={{
                  borderColor: getRarityColor(card.message.rarity),
                  boxShadow: `0 4px 15px ${getRarityColor(card.message.rarity)}`,
                }}
              >
                {/* Rarity badge */}
                <div className={`${getRarityBg(card.message.rarity)} text-gray-800 text-[6px] md:text-[9px] px-1 md:px-2 py-0.5 md:py-1 mb-1 md:mb-2 text-center rounded-full border-2 border-white font-bold`}>
                  {card.message.rarity.toUpperCase()}
                </div>

                {/* Icon */}
                <div 
                  className="text-2xl md:text-5xl text-center mb-1 md:mb-2"
                  style={{ 
                    color: getRarityColor(card.message.rarity),
                    filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))',
                  }}
                >
                  {cardIcons[card.type]}
                </div>

                {/* Title */}
                <div className="text-purple-700 text-[6px] md:text-[10px] text-center mb-1 md:mb-2 leading-tight">
                  {cardTitles[card.type]}
                </div>

                {/* Message */}
                <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-1 md:p-2 rounded-lg border-2 border-white shadow-inner">
                  <p className="text-gray-800 text-[6px] md:text-[9px] leading-relaxed text-center font-bold">
                    "{card.message.text}"
                  </p>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 text-xs md:text-lg" style={{ color: getRarityColor(card.message.rarity) }}>✦</div>
              <div className="absolute -top-1 -right-1 text-xs md:text-lg" style={{ color: getRarityColor(card.message.rarity) }}>✦</div>
            </motion.div>
          ))}
        </div>

        {/* Ranking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-3xl border-8 border-yellow-400 p-6 md:p-8 max-w-2xl mx-auto shadow-2xl"
          style={{
            boxShadow: '0 10px 40px rgba(255, 235, 153, 0.5), 0 0 0 4px white',
          }}
        >
          <div className="text-center">
            <div className="text-yellow-500 text-base md:text-xl mb-3 tracking-wider"
              style={{
                textShadow: '2px 2px 0px rgba(255,255,255,0.8)',
              }}
            >
              ★ VALENTINE RANKING ★
            </div>
            
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-5xl md:text-7xl text-pink-500 mb-4"
              style={{
                textShadow: '4px 4px 0px rgba(255,255,255,0.8)',
              }}
            >
              {ranking}/10
            </motion.div>

            <div className="flex justify-center gap-1 md:gap-2 mb-4">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 md:w-5 md:h-5 rounded-full border-2 md:border-4 border-white shadow-md ${
                    i < ranking 
                      ? 'bg-gradient-to-br from-red-400 to-pink-400' 
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <p className="text-purple-500 text-xs md:text-sm mb-4 bg-purple-100 py-2 rounded-full">
              TOTAL POINTS: {totalPoints}/15
            </p>

            <button
              onClick={handleRestart}
              className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 text-xs md:text-sm rounded-full border-4 border-white tracking-wider transition-all shadow-lg"
              style={{ 
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              ► RESTART
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
