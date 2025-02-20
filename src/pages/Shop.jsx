import { memo, useEffect, useState } from 'react';
import * as API from '../services/api';
import { Link } from 'react-router-dom';
import ListRender from '../components/ListRender';

export default function Shop() {
  const [list, setList] = useState(null);
  useEffect(() => {
    API.getShoes().then((data) => setList(data));
  }, []);

  return <ListRender list={list} />;
}
