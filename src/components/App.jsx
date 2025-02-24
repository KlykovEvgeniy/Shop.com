import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { Wrapper } from './Menu.styled';
import authContext from '../context/authContext';
import Menu from './Menu';
import Shop from '../pages/Shop';
import Main from '../pages/Main';
import Product from './Product';
import NotFound from '../pages/NotFound';
import Regiser from '../pages/Register';
import Buy from '../pages/Buy';
import Basket from '../pages/Basket';

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
        <Route path="/basket" element={<Basket />} />
        {emailName && <Route path="/" element={<Main />} />}
        <Route path=":id" element={<Buy />} />
      </Routes>
    </Wrapper>
  );
}
