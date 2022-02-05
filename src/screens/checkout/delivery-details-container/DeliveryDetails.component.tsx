import React, {useState} from 'react';
import {View} from 'react-native';
import {Observer, useLocalObservable} from 'mobx-react';
import {Formik, type FormikValues} from 'formik';

import {TextRecipientInfo} from './text-recipient-info/TextRecipientInfo.component';
import {styles} from './delivery-details.styles';
import {FormRecipientInfo} from './form-recipient-info/FormRecipientInfo.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {useTheme} from '../../../theme/theme';
import {TextButton} from '../../../components/text-button/TextButton.component';
import {localisation} from '../../../localization/localization';
import {Profile} from '../../../store/profile';

interface Recipient {
  name: string;
  address: string;
  phone: string;
}

export const DeliveryDetails = () => {
  const {theme} = useTheme();
  const profile = useLocalObservable(() => new Profile());
  const [editMode, setEditMode] = useState(false);

  const submitEditing = (values: Recipient) => {
    profile.updateDeliveryDetails(values.name, values.address, values.phone);
    changeEditMode();
  };

  const renderForm = ({handleChange, handleBlur, handleSubmit, values}: FormikValues) => (
    <FormRecipientInfo handleChange={handleChange} handleBlur={handleBlur} handleSubmit={handleSubmit} values={values} />
  );

  const changeEditMode = () => setEditMode(!editMode);

  return (
    <Observer>
      {() => (
        <View style={styles.addressContainer}>
          <View style={styles.addressHeader}>
            <TextWrapper style={styles.sectionTitle}>{localisation.t('checkoutAddressDetails')}</TextWrapper>
            {editMode ? null : <TextButton title={localisation.t('buttons.changeDetails')} onPress={changeEditMode} />}
          </View>
          <View style={[styles.addressTextContainer, {backgroundColor: theme.colorScheme.primaryDark}]}>
            {editMode ? (
              <Formik initialValues={{name: profile.username as string, address: profile.address, phone: profile.phone}} onSubmit={submitEditing}>
                {renderForm}
              </Formik>
            ) : (
              <TextRecipientInfo {...{name: profile.username as string, address: profile.address, phone: profile.phone}} />
            )}
          </View>
        </View>
      )}
    </Observer>
  );
};
