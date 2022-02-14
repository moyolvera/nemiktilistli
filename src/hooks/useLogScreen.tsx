import * as React from 'react';
import * as Analytics from 'expo-firebase-analytics';

interface useLogScreenProps {
  screenName: string;
  extraData?: { [key: string]: string };
}

const useLogScreen = ({ screenName, extraData }: useLogScreenProps) => {
  React.useEffect(() => {
    Analytics.logEvent('screen_view', {
      screen_name: screenName,
      date: new Date().toISOString(),
      ...extraData
    });
  }, []);

  return {};
};

export default useLogScreen;
