import {Formik} from 'formik';
import React, {useState} from 'react';
import {Image, NativeSyntheticEvent, Text, TextInput, TextInputFocusEventData, View} from 'react-native';

import {Icon5Button} from '../../../../components/icon-button/Icon5Button.component';
import {styles} from './contact-info.styles';
import {FormUserContacts} from './form-user-contacts/FormUserContacts.component';

export interface UserContacts {
  name: string;
  email: string;
  address: string;
}

export interface UserContactsFormikTypes {
  handleChange: {
    <T = string | React.ChangeEvent<TextInput>>(field: T): T extends React.ChangeEvent<TextInput>
      ? void
      : (e: string | React.ChangeEvent<TextInput>) => void;
  };
  handleBlur: {
    <T = TextInput>(fieldOrEvent: T): T extends string ? (e: NativeSyntheticEvent<TextInputFocusEventData>) => void : void;
  };
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  values: UserContacts;
}

export const ContactInfo = () => {
  const [userContacts, setUserContacts] = useState<UserContacts>({
    name: 'Marvis Ighodesa',
    email: 'dosamarvis@gmail.com',
    address: 'No 15 uti street off ovie palace road effurun delta state',
  });
  const [editMode, setEditMode] = useState(false);

  const highllightInputField = editMode ? '#999' : 'transparent';

  const switchEditMode = () => setEditMode(!editMode);

  const submitEditing = (values: UserContacts) => {
    setUserContacts({...values});
    switchEditMode();
  };

  const renderForm = ({handleChange, handleBlur, handleSubmit, values}: UserContactsFormikTypes) => (
    <FormUserContacts
      switchEditMode={switchEditMode}
      handleChange={handleChange}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
      values={values}
    />
  );

  return (
    <View style={styles.informationContainer}>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300',
        }}
        style={styles.image}
      />
      {editMode ? (
        <Formik initialValues={userContacts} onSubmit={submitEditing}>
          {renderForm}
        </Formik>
      ) : (
        <View style={styles.infoText}>
          <View style={styles.infoContacts}>
            <View style={styles.nameEmailContainer}>
              <Text style={styles.nameText}>{userContacts.name}</Text>
              <Text style={styles.emailText}>{userContacts.email}</Text>
            </View>
            <Icon5Button iconName="pen" onPress={switchEditMode} color="#333" size={20} />
          </View>
          <Text numberOfLines={3} style={styles.addressText}>
            {userContacts.address}
          </Text>
        </View>
      )}
    </View>
  );
};
