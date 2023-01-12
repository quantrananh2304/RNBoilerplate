import React, { memo } from 'react';
import { TextStyle as TextStyleType } from 'react-native';
import { Colors } from '~/themes';
import Text from '../Text';
import { TextColorType, TextSizeType } from '~/types/components';

interface TextLinkProps {
  children: string | any;
  linkColor?: string;
  style?: TextStyleType;
  size?: TextSizeType;
  color?: TextColorType;
  onPress?: () => void;
}

function TextStyle({
  children,
  linkColor = Colors.text.link,
  style = {},
  size = 'small',
  color = 'body',
  onPress,
}: TextLinkProps) {
  // parse text into array of normal text and link components
  function renderChildren(): any {
    const arr: any = [];
    let text: string | undefined;
    for (let i = 0; i < children.length; i += 1) {
      // `[` is sign for start of link
      if (children[i] === '[') {
        text = '';
      } else if (children[i] === ']') {
        // `]` is sign for end of link, then push link component to children
        arr.push(
          <Text
            key={i.toString()}
            size={size}
            style={[{ color: linkColor }, style]}
          >
            {text!.toString()}
          </Text>,
        );
        text = undefined;
      } else if (children[i] === '{') {
        text = '';
      } else if (children[i] === '}') {
        arr.push(
          <Text
            key={i.toString()}
            size={size}
            style={[
              {
                color: linkColor,
                textDecorationLine: 'underline',
              },
              style,
            ]}
          >
            {text!.toString()}
          </Text>,
        );
        text = undefined;
      } else if (children[i] === '<') {
        text = '';
      } else if (children[i] === '>') {
        arr.push(
          <Text
            allowFontScaling={false}
            key={i.toString()}
            size={size}
            style={[
              {
                color: Colors.error,
              },
              style,
            ]}
            color="error"
          >
            {text!.toString()}
          </Text>,
        );
        text = undefined;
      } else if (children[i] === '(') {
        text = '';
      } else if (children[i] === ')') {
        arr.push(
          <Text
            key={i.toString()}
            size={size}
            style={[
              {
                color: linkColor,
                fontWeight: '600',
                lineHeight: 30,
              },
              style,
            ]}
          >
            {text!.toString()}
          </Text>,
        );
        text = undefined;
      } else if (text !== undefined) {
        text = text.concat(children[i]);
      } else {
        arr.push(children[i]);
      }
    }
    return arr;
  }

  return (
    <Text
      onPress={onPress}
      size={size}
      color={color}
      style={{
        ...style,
      }}
    >
      {renderChildren()}
    </Text>
  );
}

export default memo(TextStyle);
