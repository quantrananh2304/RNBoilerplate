import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Fonts, Images, Metrics } from '~/themes';
import TextStyle from '../TextStyle';
import { NoDataPropType } from '~/types/components';

function NoData({
  title,
  titleColor = 'bodySecondary',
  icon = Images.icons.emptyList,
}: NoDataPropType) {
  return (
    <View style={styles.container}>
      <FastImage source={icon} style={styles.image} />
      <TextStyle style={styles.text} color={titleColor}>
        {title}
      </TextStyle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: Metrics.baseMargin,
  },
  text: {
    fontSize: Fonts.size.default,
    fontWeight: Fonts.weight.bolder,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.baseMargin,
    marginTop: 5,
    lineHeight: 22,
  },
  image: {
    width: 120,
    height: 120,
  },
});

export default memo(NoData);
