import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { useDebounce } from '@hooks';
import { MotiView, AnimatePresence } from 'moti';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import Text from '../Text/Text';
import styles from './Input.styles';

interface InputProps extends TextInputProps {
  label: string;
  required: boolean;
  showClear?: boolean;
  maxLength?: number;
  actionOnDebounce?: (value: string) => void;
}

export type InputHandlers = {
  validate: () => boolean;
  getValue: () => string;
  setValue: (value: string) => void;
};

const Input: React.ForwardRefRenderFunction<InputHandlers, InputProps> = (
  { label, required, maxLength, showClear, actionOnDebounce, ...props },
  forwardedRef
) => {
  const animation = useSharedValue(24);
  const [value, setInputValue] = React.useState('');
  const [isValid, setIsValid] = React.useState<boolean>();

  const debouncedInputValue = useDebounce(value, 500);

  const labelStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animation.value
        },
        {
          translateX: interpolate(animation.value, [0, 24], [-2, 10])
        },
        {
          scale: interpolate(animation.value, [0, 24], [0.8, 1])
        }
      ]
    };
  }, []);

  function onFocus() {
    animation.value = withTiming(0);
  }

  function onBlur() {
    if (value.length !== 0) {
      return;
    }

    animation.value = withTiming(24);
  }

  function validate() {
    if (maxLength && value.length > maxLength) {
      console.log(123123);

      return false;
    }

    if (!required) {
      return true;
    }

    if (value.length === 0) {
      return false;
    }

    return true;
  }

  function runValidations() {
    const validation = validate();
    setIsValid(validation);

    return validation;
  }

  React.useImperativeHandle(forwardedRef, () => ({
    validate: () => {
      return runValidations();
    },
    getValue: () => {
      return value;
    },
    setValue: (newValue: string) => {
      if (typeof newValue === 'string' && newValue.length > 0) {
        animation.value = withTiming(0);
      }

      setInputValue(newValue);
    }
  }));

  React.useEffect(() => {
    if (!actionOnDebounce) {
      return;
    }

    actionOnDebounce(String(debouncedInputValue));
  }, [debouncedInputValue]);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.labelWrapper, labelStyles]}>
        <Text style={styles.label}>{`${label}:`}</Text>
      </Animated.View>
      <AnimatePresence>
        {isValid === false ? (
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.error}>
            <Feather name="alert-circle" size={20} color="red" />
          </MotiView>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {showClear && value.length > 0 ? (
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.error}>
            <TouchableOpacity onPress={() => setInputValue('')}>
              <Feather name="x" size={20} color="#aaa" />
            </TouchableOpacity>
          </MotiView>
        ) : null}
      </AnimatePresence>
      <TextInput
        value={value}
        onChangeText={setInputValue}
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default React.forwardRef(Input);
