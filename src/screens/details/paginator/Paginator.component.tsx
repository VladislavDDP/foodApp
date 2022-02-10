import React from 'react';
import {View} from 'react-native';

import {SharedValue} from 'react-native-reanimated';
import {Page} from './page/Page.component';
import {styles} from './paginator.styles';

interface Props {
  gallery: Array<string>;
  scrollX: SharedValue<number>;
}

export const Paginator: React.FC<Props> = ({gallery, scrollX}) => {
  const renderPage = (_: string, i: number) => <Page key={Math.random()} i={i} scrollX={scrollX} />;

  return <View style={styles.container}>{gallery.map(renderPage)}</View>;
};
