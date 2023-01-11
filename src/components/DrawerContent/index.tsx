import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { ApplicationStyles, Images } from '~/themes';
import { NavigatorScreen, Screen } from '~/types/navigation';
import Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DrawerContent({
  navigation,
}: DrawerContentComponentProps) {
  return (
    <View style={styles.container}>
      <FastImage
        source={Images.background.drawerBackground}
        style={styles.background}
      />

      <View style={styles.header}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <FastImage
            source={Images.icons.defaultAvatar}
            style={styles.iconAvatar}
          />
        </View>

        <TouchableOpacity
          style={styles.headerInfo}
          activeOpacity={0.8}
          onPressIn={() =>
            navigation.navigate(NavigatorScreen.NoBottomBar, {
              screen: Screen.UserProfile,
            })
          }
        >
          <Text
            bold="bolder"
            color="title"
            size="small"
            style={styles.headerName}
            numberOfLines={1}
          >
            User Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={() =>
            navigation.navigate(NavigatorScreen.NoBottomBar, {
              screen: Screen.UserProfile,
            })
          }
        >
          <FastImage
            source={Images.icons.editDrawer}
            style={{ ...ApplicationStyles.iconSize.small, marginTop: 7 }}
          />
        </TouchableOpacity>
      </View>

      <Row
        label="Cài đặt"
        icon={Images.icons.settingOutline}
        onPress={() =>
          navigation.navigate(NavigatorScreen.NoBottomBar, {
            screen: Screen.Settings,
          })
        }
      />
    </View>
  );
}

function Row({ label, icon, onPress }: any) {
  return (
    <TouchableWithoutFeedback onPressIn={onPress}>
      <View style={styles.row}>
        <FastImage
          source={icon}
          style={{
            width: 20,
            height: 20,
          }}
          resizeMode="contain"
        />
        <Text style={styles.rowText} color="title">
          {label}
        </Text>
        <Icon name="chevron-right" size={25} color="#B8B8B8" />
      </View>
    </TouchableWithoutFeedback>
  );
}
