import { Link, useLocation } from 'react-router-dom';

export default function ListRender({ list }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(240px, auto))', gap: '20px' }}>
      {list &&
        list.map((item) => {
          return (
            <Link
              key={item.id}
              to={{ pathname: `${item.company}`}}
              state={item}
              style={{ border: '1px solid', padding: '15px', textDecoration: 'none', color: 'black' }}
            >
              <h2>{item.name}</h2>
              <h2>Cost: {item.cost}$</h2>
            </Link>
          );
        })}
    </div>
  );
}
