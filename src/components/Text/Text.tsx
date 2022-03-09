import * as React from 'react';
import { DisplayContext } from '@context/DisplayContext';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

const textStyles = StyleSheet.create({
  font: {
    color: 'transparent'
  }
});

function Text({ style, ...props }: TextProps) {
  const { displayStatus } = React.useContext(DisplayContext);

  const styles = React.useMemo(() => {
    if (displayStatus === 1) {
      return [style, textStyles.font];
    }

    return style;
  }, [displayStatus]);

  return <RNText {...props} style={styles} />;
}

export default Text;
