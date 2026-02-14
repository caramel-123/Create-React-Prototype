import { createContext, useContext, useState, ReactNode } from 'react';
import { Message } from '../data/messages';

export interface CardData {
  type: 'personality' | 'color' | 'pet' | 'hobby' | 'crush';
  message: Message;
  value?: string;
}

interface GameContextType {
  userName: string;
  setUserName: (name: string) => void;
  crushName: string;
  setCrushName: (name: string) => void;
  cards: CardData[];
  addCard: (card: CardData) => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState('');
  const [crushName, setCrushName] = useState('');
  const [cards, setCards] = useState<CardData[]>([]);

  const addCard = (card: CardData) => {
    setCards(prev => [...prev, card]);
  };

  const resetGame = () => {
    setUserName('');
    setCrushName('');
    setCards([]);
  };

  return (
    <GameContext.Provider
      value={{
        userName,
        setUserName,
        crushName,
        setCrushName,
        cards,
        addCard,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
};
