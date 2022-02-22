import React, { useState, useMemo, createContext } from 'react';

type ManageContextType = {
  canManageContext: boolean;
  setCanManageContext?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ManageContext = createContext<ManageContextType>({
  canManageContext: false
});

function ManageProvider({ children }: { children: React.ReactNode }) {
  const [canManageContext, setCanManageContext] = useState<boolean>(false);

  const value = useMemo(
    () => ({ canManageContext, setCanManageContext }),
    [canManageContext, setCanManageContext]
  );

  return (
    <ManageContext.Provider value={value}>{children}</ManageContext.Provider>
  );
}

export default ManageProvider;
