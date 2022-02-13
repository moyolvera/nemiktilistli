import { FontsInstalled } from '@utils/fonts';
import * as React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

interface CustomTextStyle extends TextStyle {
  fontFamily?: keyof FontsInstalled;
}

interface CustomTextProps extends TextProps {
  style: CustomTextStyle;
}

function Text(props: CustomTextProps) {
  return <RNText {...props} />;
}

export default Text;
