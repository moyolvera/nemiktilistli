import * as React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@components';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import styles from './Switch.styles';

interface SwitchProps {
  label: string;
  initialValue?: boolean;
  onChangeValue?: (value: boolean) => void;
}

export type SwitchHandlers = {
  getValue: () => boolean;
  setValue: (value: boolean) => void;
};

const Switch: React.ForwardRefRenderFunction<SwitchHandlers, SwitchProps> = (
  { label, initialValue },
  forwardedRef
) => {
  const isFirstRender = React.useRef(true);
  const [checked, setChecked] = React.useState(() => initialValue || false);
  const animation = useSharedValue(0);

  const toggleStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: animation.value
        }
      ]
    }),
    []
  );

  const backgroundColor = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        animation.value,
        [0, 14],
        ['#dddddd', '#854fff']
      )
    }),
    []
  );

  React.useEffect(() => {
    if (checked) {
      animation.value = withTiming(14, { duration: 200 });
    } else {
      animation.value = withTiming(0, { duration: 200 });
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, [checked]);

  React.useImperativeHandle(forwardedRef, () => ({
    getValue: () => {
      return checked;
    },
    setValue: (newValue: boolean) => {
      setChecked(newValue);
    }
  }));

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => setChecked(!checked)}>
        <Animated.View style={[styles.toggleWrapper, backgroundColor]}>
          <Animated.View style={[styles.toggle, toggleStyle]} />
        </Animated.View>
      </Pressable>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default React.forwardRef(Switch);
