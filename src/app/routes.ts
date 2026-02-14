import { createBrowserRouter } from 'react-router';
import Landing from './components/Landing';
import Station1Name from './components/Station1Name';
import Station2Color from './components/Station2Color';
import Station3Pet from './components/Station3Pet';
import Station4Hobby from './components/Station4Hobby';
import Station5Crush from './components/Station5Crush';
import CardReveal from './components/CardReveal';
import CardReveal1 from './components/CardReveal1';
import CardReveal2 from './components/CardReveal2';
import CardReveal3 from './components/CardReveal3';
import CardReveal4 from './components/CardReveal4';
import CardReveal5 from './components/CardReveal5';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing,
  },
  {
    path: '/station-1',
    Component: Station1Name,
  },
  {
    path: '/reveal-1',
    Component: CardReveal1,
  },
  {
    path: '/station-2',
    Component: Station2Color,
  },
  {
    path: '/reveal-2',
    Component: CardReveal2,
  },
  {
    path: '/station-3',
    Component: Station3Pet,
  },
  {
    path: '/reveal-3',
    Component: CardReveal3,
  },
  {
    path: '/station-4',
    Component: Station4Hobby,
  },
  {
    path: '/reveal-4',
    Component: CardReveal4,
  },
  {
    path: '/station-5',
    Component: Station5Crush,
  },
  {
    path: '/reveal-5',
    Component: CardReveal5,
  },
  {
    path: '/final',
    Component: CardReveal,
  },
]);
