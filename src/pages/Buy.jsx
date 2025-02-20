import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../context/authContext';

export default function Buy() {
  const [checked, setChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { productName, productCost, emailName } = useContext(authContext);
  const handleChange = () => {
    setChecked(!checked);
  };

  const handleClick = () => {
    if (isActive === true) {
      return;
    }

    setIsActive(true);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setIsActive(false);
    }, 2000);
  };
  return (
    <main>
      <h2>
        You, {emailName} will buy {productName}
      </h2>
      <p>
        It will be cost: <strong>{productCost}$</strong>
      </p>
      <label>
        I agree with <a href="https://www.privacypolicies.com/">Private Polite</a>
        <input onChange={handleChange} checked={checked} type="checkbox" />
      </label>
      <button onClick={handleClick} disabled={!checked} type="button">
        Agree
      </button>
      {showModal && <h1>Sorry, you cant buy {productName}</h1>}
    </main>
  );
}
