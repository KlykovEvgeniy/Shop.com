import { useState } from 'react';
import authContext from './authContext';

export default function AuthProvider(props) {
  const [emailName, setEmailName] = useState(null);
  const [passwordName, setPasswordName] = useState(null);
  const [productName, setProductName] = useState(null);
  const [productCost, setProductCost] = useState(null);
  const [basket, setBasket] = useState([])

  const initial = {
    basket: new Set(basket),
    emailName,
    passwordName,
    productName,
    productCost,
    createAccount: {
      createEmail: (newEmail) => {
        setEmailName(newEmail);
      },
      createPassword: (newPassword) => {
        setPasswordName(newPassword);
      }
    },
    setProduct: {
      setName: (newName) => {
        setProductName(newName);
      },
      setProductCost: (cost) => {
        setProductCost(cost);
      }
    },
    basketContent: {
      addBasket: (newBasket) => {
        setBasket(prev => {
          return [...prev, newBasket]
        })
      },
      clearBasket : () => {
        setBasket([])
      }
    }
  };
  return <authContext.Provider value={initial}>{props.children}</authContext.Provider>;
}
