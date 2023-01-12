import React from 'react';
import { View } from 'react-native';
import { Text } from '~/components';
import { Colors, Metrics } from '~/themes';
import { ProductRowType } from '~/types/screens/fakeStoreApi';

export default function ProductRow({ title, price, category }: ProductRowType) {
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.white,
        flexDirection: 'column',
        marginBottom: Metrics.smallMargin,
      }}
    >
      <Text bold="bold">{category.toUpperCase()}</Text>

      <Text>
        {title} - {price}
      </Text>
    </View>
  );
}
