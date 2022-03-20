import * as React from 'react';
import { PeopleEntry, subscribeToAllPeopleEntries } from '@actions/people';
import { Unsubscribe } from 'firebase/firestore';

type PeopleContextType = {
  peopleData: PeopleEntry[];
  getPeopleData?: () => void;
};

export const PeopleContext = React.createContext<PeopleContextType>({
  peopleData: []
});

function PeopleProvider({ children }: { children: React.ReactNode }) {
  const subscriberRef = React.useRef<Unsubscribe>();
  const [peopleData, setPeopleData] = React.useState<PeopleEntry[]>([]);

  function getPeopleData() {
    subscriberRef.current = subscribeToAllPeopleEntries(setPeopleData);
  }

  const value = React.useMemo(
    () => ({ peopleData, getPeopleData }),
    [peopleData, getPeopleData]
  );

  React.useEffect(() => {
    return () => {
      if (subscriberRef.current) {
        subscriberRef.current();
      }
    };
  }, []);

  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
}

export default PeopleProvider;
