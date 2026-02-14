import { useGame } from '../context/GameContext';
import CardRevealAnimation from './CardRevealAnimation';

export default function CardReveal1() {
  const { cards } = useGame();
  return <CardRevealAnimation card={cards[0]} nextRoute="/station-2" stationNumber={1} />;
}
