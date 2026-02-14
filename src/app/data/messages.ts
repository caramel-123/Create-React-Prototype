export type Rarity = 'common' | 'rare' | 'legendary';

export interface Message {
  text: string;
  rarity: Rarity;
}

export const messages: Message[] = [
  // Common (30 messages)
  { text: "A warm heart will find its way.", rarity: 'common' },
  { text: "Friendship and love surround you today.", rarity: 'common' },
  { text: "A smile can brighten someone's week.", rarity: 'common' },
  { text: "Your kindness makes a difference.", rarity: 'common' },
  { text: "Joy multiplies when shared.", rarity: 'common' },
  { text: "Take a moment to celebrate small joys.", rarity: 'common' },
  { text: "Hugs bring unexpected happiness.", rarity: 'common' },
  { text: "Someone is thinking of you fondly.", rarity: 'common' },
  { text: "A cheerful gesture will brighten the day.", rarity: 'common' },
  { text: "Your positivity is contagious.", rarity: 'common' },
  { text: "Share a compliment today.", rarity: 'common' },
  { text: "You are appreciated more than you know.", rarity: 'common' },
  { text: "Small acts of kindness have big impact.", rarity: 'common' },
  { text: "A thoughtful word warms the heart.", rarity: 'common' },
  { text: "Smile, it suits you.", rarity: 'common' },
  { text: "Your laughter spreads joy.", rarity: 'common' },
  { text: "Help someone and feel the warmth return.", rarity: 'common' },
  { text: "Friendship is a treasure—cherish it.", rarity: 'common' },
  { text: "A kind heart attracts happiness.", rarity: 'common' },
  { text: "Your presence comforts those around you.", rarity: 'common' },
  { text: "A little love goes a long way.", rarity: 'common' },
  { text: "Brighten someone's day with a note.", rarity: 'common' },
  { text: "Gratitude turns ordinary days into celebrations.", rarity: 'common' },
  { text: "A compliment today brings smiles tomorrow.", rarity: 'common' },
  { text: "Your energy uplifts the people nearby.", rarity: 'common' },
  { text: "The world needs your kindness.", rarity: 'common' },
  { text: "Your heart is open, and good things follow.", rarity: 'common' },
  { text: "Someone may surprise you with joy today.", rarity: 'common' },
  { text: "Love starts from within.", rarity: 'common' },
  { text: "A cheerful heart lights up a room.", rarity: 'common' },
  
  // Rare (15 messages)
  { text: "New connections bring fresh happiness.", rarity: 'rare' },
  { text: "Your intuition guides you to kindness.", rarity: 'rare' },
  { text: "Unexpected joy is heading your way.", rarity: 'rare' },
  { text: "A caring act will return in a surprising way.", rarity: 'rare' },
  { text: "Today is perfect for sharing warmth.", rarity: 'rare' },
  { text: "An old friendship may rekindle soon.", rarity: 'rare' },
  { text: "Take time to appreciate those around you.", rarity: 'rare' },
  { text: "Your generosity creates ripples of happiness.", rarity: 'rare' },
  { text: "Someone's gratitude will touch your heart.", rarity: 'rare' },
  { text: "A thoughtful message will brighten a soul.", rarity: 'rare' },
  { text: "Good energy flows back to you.", rarity: 'rare' },
  { text: "A positive choice today has lasting effects.", rarity: 'rare' },
  { text: "A happy surprise awaits in your day.", rarity: 'rare' },
  { text: "A smile shared brings double joy.", rarity: 'rare' },
  { text: "Your heart is in the right place today.", rarity: 'rare' },
  
  // Legendary (5 messages)
  { text: "Love and light surround you like a shield.", rarity: 'legendary' },
  { text: "A moment of magic will inspire your heart.", rarity: 'legendary' },
  { text: "You are a beacon of joy and friendship.", rarity: 'legendary' },
  { text: "An extraordinary connection will appear soon.", rarity: 'legendary' },
  { text: "Your heart's intentions manifest beautiful outcomes.", rarity: 'legendary' },
];

export const getRandomMessage = (): Message => {
  // Weighted random selection based on rarity
  const rand = Math.random();
  
  if (rand < 0.6) {
    // 60% chance for common
    const commonMessages = messages.filter(m => m.rarity === 'common');
    return commonMessages[Math.floor(Math.random() * commonMessages.length)];
  } else if (rand < 0.9) {
    // 30% chance for rare
    const rareMessages = messages.filter(m => m.rarity === 'rare');
    return rareMessages[Math.floor(Math.random() * rareMessages.length)];
  } else {
    // 10% chance for legendary
    const legendaryMessages = messages.filter(m => m.rarity === 'legendary');
    return legendaryMessages[Math.floor(Math.random() * legendaryMessages.length)];
  }
};

export const getRarityPoints = (rarity: Rarity): number => {
  switch (rarity) {
    case 'common':
      return 1;
    case 'rare':
      return 2;
    case 'legendary':
      return 3;
  }
};
