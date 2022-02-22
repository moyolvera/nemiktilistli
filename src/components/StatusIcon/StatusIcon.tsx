import * as React from 'react';
import { Feather } from '@expo/vector-icons';

interface StatusIconProps {
  answered: boolean;
  attending: boolean;
}

function StatusIcon({ answered, attending }: StatusIconProps) {
  if (!answered) {
    return <Feather name="circle" size={26} color="#606060" />;
  }

  if (attending) {
    return <Feather name="check-circle" size={26} color="#00c853" />;
  }

  return <Feather name="x-circle" size={26} color="#ff3d00" />;
}

export default StatusIcon;
