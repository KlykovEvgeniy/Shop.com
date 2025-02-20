import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './Menu.styled';
import AuthProvider from '../context/AuthProvider';
import authContext from '../context/authContext';
import Menu from './Menu';
import Shop from '../pages/Shop';
import Main from '../pages/Main';
import Product from './Product';
import NotFound from '../pages/NotFound';
import Regiser from '../pages/Register';
import { useContext } from 'react';

export default function App() {
  const { emailName } = useContext(authContext);
  return (
    <Wrapper>
      <Menu />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Regiser />} />
        {emailName && <Route path="/" element={<Main />} />}
      </Routes>
    </Wrapper>
  );
}
