import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Main from './components/main/Main';
import Basket from './components/basket/Basket';
import Page404 from './components/page404/Page404';
import DetailsProduct from './components/product/detailsProduct/DetailsProduct';

export type ProductType = {
  id: number;
  name: string;
  description: string;
  category: string;
  gender: string;
  price: number;
  stock: number;
  image: string;
  image2: string;
  alt: string;
  raiting: number;
};

function App() {
  const [ducks, setDucks] = React.useState<ProductType[]>([]);

  useEffect(() => {
    fetch('https://631e4b429f946df7dc40b245.mockapi.io/ducks')
      .then((res) => res.json())
      .then((json) => {
        setDucks(json);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main ducks={ducks} setDucks={setDucks} />} />
          <Route path="basket" element={<Basket />} />
          <Route
            path="details/:id"
            element={<DetailsProduct ducks={ducks} />}
          />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
