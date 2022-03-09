import * as React from 'react';

type DisplayContextType = {
  displayStatus: 0 | 1 | 2;
  updateDisplayStatus?: () => void;
};

export const DisplayContext = React.createContext<DisplayContextType>({
  displayStatus: 0
});

function DisplayProvider({ children }: { children: React.ReactNode }) {
  const [displayStatus, setDisplayStatus] = React.useState<0 | 1 | 2>(0);

  function updateDisplayStatus() {
    switch (displayStatus) {
      case 0:
        setDisplayStatus(1);
        break;
      case 1:
        setDisplayStatus(2);
        break;
      case 2:
      default:
        setDisplayStatus(0);
        break;
    }
  }

  const value = React.useMemo(
    () => ({ displayStatus, updateDisplayStatus }),
    [displayStatus, updateDisplayStatus]
  );

  React.useEffect(() => {
    console.log('DisplayProvider: ' + displayStatus);
  }, [displayStatus]);

  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  );
}

export default DisplayProvider;
