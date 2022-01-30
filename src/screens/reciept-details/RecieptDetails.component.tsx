import React from 'react';
import {FlatList, View} from 'react-native';

import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {SafeAreaTheme} from '../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../components/text-wrapper/TextWrapper.component';
import {localisation} from '../../localization/localization';
import {RecieptItem} from '../../model/recieptItem';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {NamedSection} from './named-section/NamedSection.component';
import {styles} from './reciept-details.styles';
import {RecieptListItem} from './reciept-list-item/RecieptListItem.component';

export const RecieptDetails: React.FC<AppNavigatorScreenProps<Screens.Reciept>> = ({navigation, route}) => {
  const reciept = route.params.item;

  const renderItem = ({item}: {item: RecieptItem}) => (
    <RecieptListItem name={item.attributes.name} qtyPrice={`${item.qty} x ${item.attributes.price}`} />
  );

  const extractKey = (item: RecieptItem) => item.id.toString();

  return (
    <SafeAreaTheme style={styles.container}>
      <CustomHeader title={localisation.t('orderTitle')} onPress={navigation.goBack} />
      <View style={styles.wrapper}>
        <NamedSection sectionTitle={localisation.t('orderId')} sectionDetails={reciept.id.toString()} />
        <View style={styles.separator} />
        <NamedSection sectionTitle={localisation.t('orderPhone')} sectionDetails={reciept.phone} />
        <View style={styles.separator} />
        <NamedSection sectionTitle={localisation.t('orgerAddress')} sectionDetails={reciept.address} />
        <View style={styles.separator} />
        <NamedSection sectionTitle={localisation.t('orderDeliveruMethod')} sectionDetails={reciept.deliveryMethod} />
        <View style={styles.separator} />
        <NamedSection sectionTitle={localisation.t('orderPaymentMethod')} sectionDetails={reciept.payment} />
        <View style={styles.separator} />
        <NamedSection sectionTitle={localisation.t('orderDate')} sectionDetails={reciept.createdAt} />
        <View style={styles.separator} />
        <NamedSection sectionTitle={localisation.t('orderTotalPrice')} sectionDetails={reciept.totalPrice} />
        <View style={styles.separator} />

        <TextWrapper style={styles.itemsHeaderText}>{localisation.t('orderItems')}</TextWrapper>
        <FlatList data={reciept.items} renderItem={renderItem} keyExtractor={extractKey} />
      </View>
    </SafeAreaTheme>
  );
};
