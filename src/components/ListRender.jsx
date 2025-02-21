import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ListRender({ list }) {
  const [value, setValue] = useState('');
  const [sortedList, setSortedList] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setSortedList(list);
  }, [value, list]);

  const handleSubmit = () => {
    const sorted = sortedList.filter(item => {
      return value.includes(item.name)
    })

    setSortedList(sorted)
  }

  return (
    <main>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input style={{padding: '10px'}} onChange={handleChange} value={value} type="text" placeholder="Search here..." />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(240px, auto))', gap: '20px' }}>
        {sortedList &&
          sortedList.map((item) => {
            return (
              <Link
                key={item.id}
                to={{ pathname: `${item.company}` }}
                state={item}
                style={{ border: '1px solid', padding: '15px', textDecoration: 'none', color: 'black' }}
              >
                <h2>{item.name}</h2>
                <h2>Cost: {item.cost}$</h2>
              </Link>
            );
          })}
      </div>
    </main>
  );
}
