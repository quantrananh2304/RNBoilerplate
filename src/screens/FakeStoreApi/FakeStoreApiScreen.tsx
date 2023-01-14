import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, NoData, Text } from '~/components';
import { Colors, Metrics } from '~/themes';
import { RootState } from '~/types/reduxs';
import { useFocusEffect } from '@react-navigation/native';
import FakeStoreApiActions from '~/reduxs/reducer/fakestoreapiReducer';
import { Screen, ScreenNavigationProps } from '~/types/navigation';
import AddProduct from './AddProduct';
import Products from './Products';

export { AddProduct, Products };

export default function FakeStoreApiScreen({
  navigation,
}: ScreenNavigationProps) {
  const i18t = useTranslation();

  const { categories, fetching } = useSelector(
    (state: RootState) => state.fakeStoreApi,
  );

  const dispatch = useDispatch();

  function onRefresh() {
    dispatch(FakeStoreApiActions.fetchAllCategories());
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
        data={categories}
        keyExtractor={(item) => String(Math.random())}
        style={{ marginBottom: Metrics.baseMargin }}
        ListEmptyComponent={<NoData title={i18t.t('component.noData.title')} />}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
        renderItem={({ item }: { item: string }) => {
          return (
            <TouchableOpacity
              style={{
                padding: 20,
                borderRadius: 5,
                backgroundColor: Colors.white,
                flexDirection: 'column',
                marginBottom: Metrics.smallMargin,
              }}
              onPress={() =>
                navigation.navigate(Screen.FakeStoreApi_Products, {
                  category: item,
                })
              }
            >
              <Text bold="bold">{item.toUpperCase()}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
