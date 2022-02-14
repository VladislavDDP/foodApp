import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {SubmitButton} from '../submit-button/SubmitButton.component';
import {styles} from './disconnected-screen.styles';

interface Props {
  onPress: () => void;
}

export const DisconnectedScreen: React.FC<Props> = ({onPress}) => (
  <View style={styles.container}>
    <Icon name="wifi-off" size={100} color="#999" />
    <Text style={styles.refreshTitle}>No internet Connection</Text>
    <Text style={styles.refreshText}>Your internet connection is currently not available please check or try again.</Text>
    <SubmitButton title="Try again" style={styles.refreshButton} textStyle={styles.btnText} onPress={onPress} />
  </View>
);
