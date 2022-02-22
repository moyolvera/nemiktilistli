import React, { useEffect } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import styles from './PasscodeDot.styles';

interface PasscodeDotProps {
  isActive: boolean;
}

function PasscodeDot({ isActive }: PasscodeDotProps) {
  const animation = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(
    () => ({
      opacity: interpolate(
        animation.value,
        [1, 1.4],
        [0.5, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          scale: animation.value
        }
      ]
    }),
    []
  );

  useEffect(() => {
    if (isActive) {
      animation.value = withTiming(1.4);
    } else {
      animation.value = withTiming(1);
    }
  }, [isActive]);

  return <Animated.View style={[animatedStyles, styles.dotBody]} />;
}

export default PasscodeDot;
