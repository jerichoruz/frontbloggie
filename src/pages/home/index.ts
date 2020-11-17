import Loadable from 'react-loadable';
import { Loading } from '../../common/navigation';

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
});

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Dashboard',
  },
  {
    path: '/Dashboard',
    exact: true,
    component: Home,
    name: 'Dashboard',
  },
];
