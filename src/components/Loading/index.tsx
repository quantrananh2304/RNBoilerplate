import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { Portal } from 'react-native-portalize';
import { Colors, Images, Metrics } from '~/themes';
import Text from '../Text';

function Loading({ visible }: { visible: boolean }) {
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.circle,
        }),
        Animated.delay(500),
      ]),
    ).start();
  }, [animated]);

  if (!visible) {
    return null;
  }

  const spin = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Portal>
      <View style={styles.container}>
        <Animated.Image
          source={Images.icons.loading}
          style={[
            styles.brand,
            {
              transform: [
                {
                  rotate: spin,
                },
              ],
            },
          ]}
        />
        <Text size="large" style={styles.text}>
          Loading
        </Text>
      </View>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    width: Metrics.screenWidth / 5,
    height: Metrics.screenWidth / 5,
  },
  text: {
    textAlign: 'center',
  },
});

export default Loading;
