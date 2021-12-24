import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawers} from '../../../../navigation/drawer-stack/drawer.types';
import {styles} from './content-item.styles';

interface Props {
  icon: string;
  name: Drawers;
  color: string;
  goToDrawer: (drawerName: Drawers) => void;
}

export const DrawerContentItem: React.FC<Props> = props => (
  <View>
    <TouchableOpacity onPress={() => props.goToDrawer(props.name)} style={styles.button}>
      <Icon name={props.icon} size={20} color={props.color} />
      <Text style={[styles.text, {color: props.color}]}>{props.name}</Text>
    </TouchableOpacity>
    <View style={styles.line} />
  </View>
);
