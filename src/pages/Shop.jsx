import { useEffect, useState } from 'react';
import * as API from '../services/api';
import ListRender from '../components/ListRender';

export default function Shop() {
  const [list, setList] = useState(null);
  useEffect(() => {
    API.getShoes().then((data) => setList(data));
    setList(list)
  }, []);


  return (
    <main>
      <ListRender list={list} />
    </main>
  );
}
