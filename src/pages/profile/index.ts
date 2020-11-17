import Loadable from 'react-loadable';
import { Loading } from '../../common/navigation';

const Profile = Loadable({
  loader: () => import('./Profile'),
  loading: Loading,
});

export const routes = [
  {
    path: '/Profile',
    exact: true,
    component: Profile,
    name: 'Profile',
  },
];
