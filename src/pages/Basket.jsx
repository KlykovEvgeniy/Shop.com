import { useContext, useRef } from 'react';
import { generate } from 'shortid';
import authContext from '../context/authContext';

export default function Basket() {
  const { basket } = useContext(authContext);
  const normalizedBasket = [...basket];

  return (
    <main>
      {normalizedBasket.map((item) => {
        return <li key={generate()} style={{ width: 'max-content' }}>{item}</li>;
      })}
    </main>
  );
}
