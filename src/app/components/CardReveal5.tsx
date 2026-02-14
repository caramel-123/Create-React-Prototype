import { useGame } from '../context/GameContext';
import CardRevealAnimation from './CardRevealAnimation';

export default function CardReveal5() {
  const { cards } = useGame();
  return <CardRevealAnimation card={cards[4]} nextRoute="/final" stationNumber={5} />;
}
