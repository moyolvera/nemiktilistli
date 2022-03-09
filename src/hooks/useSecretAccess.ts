import * as React from 'react';
import asyncStorageUtil from '@utils/asyncStorageUtil';

function useSecretAccess() {
  const [secret, setSecret] = React.useState(false);

  async function getSecretEntry() {
    const entry = await asyncStorageUtil.readData('secret');

    if (!entry) {
      return;
    }

    const diff = Date.now() - Number(entry);
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    if (diffDays > 15) {
      await asyncStorageUtil.removeData('secret');
      return;
    }

    setSecret(true);
  }

  React.useEffect(() => {
    getSecretEntry();
  }, []);

  return {
    secret
  };
}

export default useSecretAccess;
