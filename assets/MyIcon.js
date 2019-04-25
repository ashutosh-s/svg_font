import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';

const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
//   'LineAwesome',
  'babysparks.ttf'
);

export default Icon;