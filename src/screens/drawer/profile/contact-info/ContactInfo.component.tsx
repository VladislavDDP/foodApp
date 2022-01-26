import {Formik, type FormikValues} from 'formik';
import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';

import {Icon5Button} from '../../../../components/icon-font-awesome5-button/Icon5Button.component';
import {TextWrapper} from '../../../../components/text-wrapper/TextWrapper.component';
import {useStore} from '../../../../store/store';
import {useTheme} from '../../../../theme/theme';
import {styles} from './contact-info.styles';
import {FormUserContacts} from './form-user-contacts/FormUserContacts.component';

interface UserContacts {
  name: string;
  email: string;
  address: string;
}

export const ContactInfo = observer(() => {
  const {theme} = useTheme();
  const {profile} = useStore();
  const [editMode, setEditMode] = useState(false);

  const switchEditMode = () => setEditMode(!editMode);

  const submitEditing = (values: UserContacts) => {
    profile.updateUserProfile(values.name, values.address, values.email);
    switchEditMode();
  };

  const renderForm = ({handleChange, handleBlur, handleSubmit, values}: FormikValues) => (
    <FormUserContacts
      switchEditMode={switchEditMode}
      handleChange={handleChange}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
      values={values}
    />
  );

  return (
    <View style={[styles.informationContainer, {backgroundColor: theme.colorScheme.primaryBackgroundDark}]}>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300',
        }}
        style={styles.image}
      />
      {editMode ? (
        <Formik initialValues={{name: profile.name, email: profile.email, address: profile.address}} onSubmit={submitEditing}>
          {renderForm}
        </Formik>
      ) : (
        <View style={styles.infoText}>
          <View style={styles.infoContacts}>
            <View style={styles.nameEmailContainer}>
              <TextWrapper style={styles.nameText}>{profile.name}</TextWrapper>
              <Text style={styles.emailText}>{profile.email}</Text>
            </View>
            <Icon5Button iconName="pen" onPress={switchEditMode} color="#333" size={20} />
          </View>
          <Text numberOfLines={3} style={styles.addressText}>
            {profile.address}
          </Text>
        </View>
      )}
    </View>
  );
});
