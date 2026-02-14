import { useGame } from '../context/GameContext';
import CardRevealAnimation from './CardRevealAnimation';

export default function CardReveal3() {
  const { cards } = useGame();
  return <CardRevealAnimation card={cards[2]} nextRoute="/station-4" stationNumber={3} />;
}
