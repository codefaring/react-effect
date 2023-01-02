import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [checked]);

  return (
    <div className='main'>
      <div className='checkbox'>
        <input
          id='checkbox'
          type='checkbox'
          value={checked}
          onChange={handleChange}
        />
        <label htmlFor='checkbox'>할인된 상품보기</label>
      </div>
      <ul>
        {products.map((product) => (
          <li ket={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
