import React from 'react';
import {FlatList, Text, View, SafeAreaView} from 'react-native';

import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {RecieptItem} from '../../model/recieptItem';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {useTheme} from '../../theme/theme';
import {NamedSection} from './named-section/NamedSection.component';
import {styles} from './reciept-details.styles';
import {RecieptListItem} from './reciept-list-item/RecieptListItem.component';

export const RecieptDetails: React.FC<AppNavigatorScreenProps<Screens.Reciept>> = ({navigation, route}) => {
  const reciept = route.params.item;
  const {theme} = useTheme();

  const renderItem = ({item}: {item: RecieptItem}) => (
    <RecieptListItem name={item.attributes.name} qtyPrice={`${item.qty} x ${item.attributes.price}`} />
  );

  const extractKey = (item: RecieptItem) => item.id.toString();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.colorScheme.primaryBackgroundLight}]}>
      <CustomHeader title="Cart" onPress={navigation.goBack} />
      <View style={styles.wrapper}>
        <NamedSection sectionTitle="Order ID" sectionDetails={reciept.id.toString()} />
        <View style={styles.separator} />
        <NamedSection sectionTitle="Phone number" sectionDetails={reciept.phone} />
        <View style={styles.separator} />
        <NamedSection sectionTitle="Address" sectionDetails={reciept.address} />
        <View style={styles.separator} />
        <NamedSection sectionTitle="Delivery method" sectionDetails={reciept.deliveryMethod} />
        <View style={styles.separator} />
        <NamedSection sectionTitle="Payment method" sectionDetails={reciept.payment} />
        <View style={styles.separator} />
        <NamedSection sectionTitle="Date" sectionDetails={reciept.createdAt} />
        <View style={styles.separator} />
        <NamedSection sectionTitle="Total price" sectionDetails={reciept.totalPrice} />
        <View style={styles.separator} />

        <Text style={[styles.itemsHeaderText, {color: theme.colorScheme.primaryText}]}>Items</Text>
        <FlatList data={reciept.items} renderItem={renderItem} keyExtractor={extractKey} />
      </View>
    </SafeAreaView>
  );
};
