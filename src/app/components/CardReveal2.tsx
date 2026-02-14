import { useGame } from '../context/GameContext';
import CardRevealAnimation from './CardRevealAnimation';

export default function CardReveal2() {
  const { cards } = useGame();
  return <CardRevealAnimation card={cards[1]} nextRoute="/station-3" stationNumber={2} />;
}
