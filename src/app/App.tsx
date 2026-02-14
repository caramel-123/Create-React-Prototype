import { RouterProvider } from 'react-router';
import { GameProvider } from './context/GameContext';
import { router } from './routes';

export default function App() {
  return (
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  );
}
