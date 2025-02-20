import { useContext } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import authContext from '../context/authContext';

export default function Product() {
  const { emailName } = useContext(authContext);
  const { state } = useLocation();
  const handleClick = () => {
    if(emailName === null){

    }
  }
  return (
    <main>
      <h2>{state.name}</h2>
      <p>Company: {state.company}</p>
      <p>Cost: {state.cost}$</p>
      <p>Description: {state.description}</p>
     {emailName && <button style={{border: '1px solid',background: 'transperent', textDecoration: 'none', padding: '10px'}} type='button'>Buy</button>}
     {!emailName && <Link style={{border: '1px solid', textDecoration: 'none', padding: '10px'}} to='/register'>Buy</Link>}
    </main>
  );
}
