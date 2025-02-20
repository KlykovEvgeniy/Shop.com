import { useState } from 'react';
import authContext from './authContext';

export default function AuthProvider(props) {
  const [emailName, setEmailName] = useState(null);
  const [passwordName, setPasswordName] = useState(null);

  const initial = {
    emailName,
    passwordName,
    createAccount: {
      createEmail: (newEmail) => {
        setEmailName(newEmail);
      },
      createPassword: (newPassword) => {
        setPasswordName(newPassword);
      }
    }
  };
  return <authContext.Provider value={initial}>{props.children}</authContext.Provider>;
}
