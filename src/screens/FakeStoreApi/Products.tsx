import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, NoData, Text } from '~/components';
import { Colors, Metrics } from '~/themes';
import { RootState } from '~/types/reduxs';
import ProductRow from './components/ProductRow';
import { useFocusEffect } from '@react-navigation/native';
import FakeStoreApiActions from '~/reduxs/reducer/fakestoreapiReducer';
import { ProductRowType } from '~/types/screens/fakeStoreApi';
import {
  Screen,
  ScreenNavigationProps,
  ScreenPropsWithRoute,
} from '~/types/navigation';

export default function Products({
  navigation,
  route,
}: ScreenNavigationProps & ScreenPropsWithRoute<Screen.FakeStoreApi_Products>) {
  const i18t = useTranslation();

  const { category } = route.params;

  const { products, fetching } = useSelector(
    (state: RootState) => state.fakeStoreApi,
  );

  const dispatch = useDispatch();

  const handlePress = () => {
    navigation.navigate(Screen.FakeStoreApi_AddProduct);
  };

  function onRefresh() {
    dispatch(FakeStoreApiActions.fetchAllProducts({ category }));
  }

  useFocusEffect(
    useCallback(() => {
      onRefresh();
    }, []),
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
      }}
    >
      <Loading visible={fetching} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        style={{ marginBottom: Metrics.baseMargin }}
        ListEmptyComponent={<NoData title={i18t.t('component.noData.title')} />}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
        renderItem={({ item }: { item: ProductRowType | any }) => {
          const { title, price, category } = item;

          return <ProductRow title={title} price={price} category={category} />;
        }}
      />

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          position: 'absolute',
          bottom: 70,
          right: 40,
          backgroundColor: Colors.accent,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
        onPress={handlePress}
      >
        <Text size="default" bold="bold" color="white">
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}
