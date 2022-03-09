import * as React from 'react';

type ManageContextType = {
  canManageContext: boolean;
  setCanManageContext?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ManageContext = React.createContext<ManageContextType>({
  canManageContext: false
});

function ManageProvider({
  secret,
  children
}: {
  secret: boolean;
  children: React.ReactNode;
}) {
  const [canManageContext, setCanManageContext] = React.useState<boolean>(
    secret || false
  );

  const value = React.useMemo(
    () => ({ canManageContext, setCanManageContext }),
    [canManageContext, setCanManageContext]
  );

  React.useEffect(() => {
    setCanManageContext(secret);
  }, [secret]);

  return (
    <ManageContext.Provider value={value}>{children}</ManageContext.Provider>
  );
}

export default ManageProvider;
