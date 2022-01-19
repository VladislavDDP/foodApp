import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {Formik, type FormikValues} from 'formik';

import {ChangeButton} from '../change-button/ChangeButton.component';
import {TextRecipientInfo} from './text-recipient-info/TextRecipientInfo.component';
import {styles} from './delivery-details.styles';
import {FormRecipientInfo} from './form-recipient-info/FormRecipientInfo.component';
import {useStore} from '../../../store/store';

interface Recipient {
  name: string;
  address: string;
  phone: string;
}

export const DeliveryDetails = observer(() => {
  const {profile} = useStore();
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
    <View style={styles.addressContainer}>
      <View style={styles.addressHeader}>
        <Text style={styles.sectionTitle}>Address details</Text>
        {editMode ? null : <ChangeButton onPress={changeEditMode} />}
      </View>
      <View style={styles.addressTextContainer}>
        {editMode ? (
          <Formik initialValues={{name: profile.name, address: profile.address, phone: profile.phone}} onSubmit={submitEditing}>
            {renderForm}
          </Formik>
        ) : (
          <TextRecipientInfo {...{name: profile.name, address: profile.address, phone: profile.phone}} />
        )}
      </View>
    </View>
  );
});
