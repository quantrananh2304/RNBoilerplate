import React from 'react';
import { Text } from '~/components';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ApplicationStyles, Images } from '~/themes';
import CounterScreen from '../Counter/CounterScreen';

export default function HomeScreen({ navigation }: { navigation: any }) {
  function handleOpenDrawer() {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          {/* <TouchableOpacity onPress={handleOpenDrawer}>
            <FastImage
              source={Images.icons.alignLeft}
              style={ApplicationStyles.iconSize.default}
            />
          </TouchableOpacity>

          <Text>Homepage</Text> */}

          <View style={{ width: 24 }} />
        </View>

        <CounterScreen />
      </SafeAreaView>
    </View>
  );
}
