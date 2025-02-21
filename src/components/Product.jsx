import { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import authContext from '../context/authContext';

export default function Product() {
  const { emailName, setProduct, basketContent, basket } = useContext(authContext);
  const { state } = useLocation();

  const handleClick = () => {
    setProduct.setName(state.name);
    setProduct.setProductCost(state.cost);
  };

  const handleBasketClick = () => {
    basketContent.addBasket(state.name)
  }

  return (
    <main>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>{state.name}</h2>
        <button type='button' onClick={handleBasketClick}>Basket</button>
      </div>
      <p>Company: {state.company}</p>
      <p>Cost: {state.cost}$</p>
      <p>Description: {state.description}</p>
      {emailName && (
        <Link
          onClick={handleClick}
          to="/butproduct"
          style={{ border: '1px solid', background: 'transperent', textDecoration: 'none', padding: '10px' }}
          type="button"
        >
          Buy
        </Link>
      )}
      {!emailName && (
        <Link style={{ border: '1px solid', textDecoration: 'none', padding: '10px' }} to="/register">
          Buy
        </Link>
      )}
    </main>
  );
}
