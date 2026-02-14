import { useGame } from '../context/GameContext';
import CardRevealAnimation from './CardRevealAnimation';

export default function CardReveal4() {
  const { cards } = useGame();
  return <CardRevealAnimation card={cards[3]} nextRoute="/station-5" stationNumber={4} />;
}
