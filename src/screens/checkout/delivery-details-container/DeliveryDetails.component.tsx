import React, {useState} from 'react';
import {NativeSyntheticEvent, Text, TextInput, TextInputFocusEventData, View} from 'react-native';
import {Formik} from 'formik';

import {ChangeButton} from '../change-button/ChangeButton.component';
import {TextRecipientInfo} from './text-recipient-info/TextRecipientInfo.component';
import {styles} from './delivery-details.styles';
import {FormRecipientInfo} from './form-recipient-info/FormRecipientInfo.component';

interface RecipientData {
  name: string;
  address: string;
  phone: string;
}

export interface DeliveryFormikTypes {
  handleChange: {
    <T = string | React.ChangeEvent<TextInput>>(field: T): T extends React.ChangeEvent<TextInput>
      ? void
      : (e: string | React.ChangeEvent<TextInput>) => void;
  };
  handleBlur: {
    <T = TextInput>(fieldOrEvent: T): T extends string ? (e: NativeSyntheticEvent<TextInputFocusEventData>) => void : void;
  };
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  values: RecipientData;
}

export const DeliveryDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [recipientData, setRecipientData] = useState<RecipientData>({
    name: 'Marvis Kparobo',
    address: 'Km 5 refinery road oppsite republic road, effurun, delta state',
    phone: '+234 9011039271',
  });

  const submitEditing = (values: RecipientData) => {
    setRecipientData({...values});
    changeEditMode();
  };

  const renderForm = ({handleChange, handleBlur, handleSubmit, values}: DeliveryFormikTypes) => (
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
          <Formik initialValues={recipientData} onSubmit={submitEditing}>
            {renderForm}
          </Formik>
        ) : (
          <TextRecipientInfo {...recipientData} />
        )}
      </View>
    </View>
  );
};
