import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Main from './components/main/Main';
import Page404 from './components/page404/Page404';
import DetailsProduct from './components/product/detailsProduct/DetailsProduct';
import productDucks from './data/products.json';

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
  const [ducks, setDucks] = React.useState<ProductType[]>(productDucks);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main ducks={ducks} />} />
          <Route path="details/:id" element={<DetailsProduct />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
