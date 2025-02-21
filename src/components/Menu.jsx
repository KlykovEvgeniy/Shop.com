import { Link } from 'react-router-dom';
import { Header } from './Menu.styled';
import authContext from '../context/authContext';
import { useContext } from 'react';

export default function Menu() {
  const { emailName, createAccout } = useContext(authContext);
  const handleClick = () => {
    createAccout.createEmail(null)
    createAccout.createPassword(null)
  }
  return (
    <Header>
      <h1>Shop.com</h1>
      <nav>
        <Link style={{ textDecoration: 'none', paddingLeft: '15px' }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: 'none', paddingLeft: '15px' }} to="/shop">
          Shop
        </Link>
        <Link style={{ textDecoration: 'none', paddingLeft: '15px' }} to="/register">
          {emailName && 'Profile'} {!emailName && 'Register'}
        </Link>
        {emailName && (
          <Link onClick={handleClick} style={{ textDecoration: 'none', paddingLeft: '15px' }} to="/">
            Log Out
          </Link>
        )}
        {emailName && <Link style={{ textDecoration: 'none', paddingLeft: '15px' }} to='/basket'>Basket</Link>}
      </nav>
    </Header>
  );
}
