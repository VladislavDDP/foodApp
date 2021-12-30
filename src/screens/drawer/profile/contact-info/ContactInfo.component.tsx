import React, {createRef, useState} from 'react';
import {Image, TextInput, View} from 'react-native';

import {Icon5Button} from '../../../../components/icon-button/Icon5Button.component';
import {styles} from './contact-info.styles';

export const ContactInfo = () => {
  const [name, setName] = useState('Marvis Ighodesa');
  const [email, setEmail] = useState('dosamarvis@gmail.com');
  const [address, setAddress] = useState('No 15 uti street off ovie palace road effurun delta state');
  const [editMode, setEditMode] = useState(false);

  const highllightInputField = editMode ? '#999' : 'transparent';

  const input = createRef<TextInput>();

  const editContactFields = () => {
    setEditMode(!editMode);
    if (input.current) {
      input.current?.focus();
    }
  };

  return (
    <View style={styles.informationContainer}>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300',
        }}
        style={styles.image}
      />
      <View style={styles.infoText}>
        <View style={styles.infoContacts}>
          <View style={styles.nameEmailContainer}>
            <TextInput
              ref={input}
              autoFocus={true}
              autoCapitalize="none"
              autoCorrect={false}
              editable={editMode}
              maxLength={20}
              style={[styles.nameText, {borderBottomColor: highllightInputField}]}
              onChangeText={setName}
              value={name}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              editable={editMode}
              maxLength={20}
              onChangeText={setEmail}
              style={[styles.emailText, {borderBottomColor: highllightInputField}]}
              value={email}
            />
          </View>
          <Icon5Button iconName="pen" onPress={editContactFields} color="#333" size={20} />
        </View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          editable={editMode}
          maxLength={60}
          multiline={true}
          numberOfLines={3}
          onChangeText={setAddress}
          style={[styles.addressText, {borderBottomColor: highllightInputField}]}
          value={address}
        />
      </View>
    </View>
  );
};
