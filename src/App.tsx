import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/main/Main';
import Basket from './components/basket/Basket';
import Page404 from './components/page404/Page404';
import DetailsProduct from './components/product/detailsProduct/DetailsProduct';
import { useDispatch } from 'react-redux';
import { setReduxDucks } from './redux/slices/ducksSlice';
import './App.css';

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
  count: number;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://631e4b429f946df7dc40b245.mockapi.io/ducks')
      .then((res) => {
        dispatch(setReduxDucks(res.data));
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="basket" element={<Basket />} />
          <Route path="details/:id" element={<DetailsProduct />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
