import { type RouteObject } from 'react-router-dom';
import Home from '../views/Home/index'
import About from '../views/About/index';
import Contact from '../views/Contact/index';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
];

export default routes;