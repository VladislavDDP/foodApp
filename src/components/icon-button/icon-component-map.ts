import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Awesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {IconTypes} from './icon-types';

export const iconComponentMap: {[key in IconTypes]: typeof AwesomeIcon | typeof Awesome5Icon} = {
  [IconTypes.FontAwesomeIcon]: AwesomeIcon,
  [IconTypes.FontAwesome5Icon]: Awesome5Icon,
};
