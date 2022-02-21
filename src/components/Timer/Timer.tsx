import * as React from 'react';
import { Text } from '@components/index';
import styles from './Timer.styles';

interface TimerProps {}

function Timer({}: TimerProps) {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  function calculateTimeLeft() {
    const difference = +new Date(`05/20/2022 17:00:00`) - +new Date();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60)
    };
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 10000);

    return () => clearTimeout(timer);
  });

  return (
    <Text style={styles.wrapper}>
      {`${timeLeft.days} d ${timeLeft.hours} h ${timeLeft.minutes} m`}
    </Text>
  );
}

export default Timer;
