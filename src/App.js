import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function App() {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div className='main'>
      {showProducts && <Products />}
      <button
        className='button'
        onClick={() => setShowProducts((show) => !show)}
      >
        {showProducts ? '제품 숨기기' : '제품 보기'}
      </button>
    </div>
  );
}
