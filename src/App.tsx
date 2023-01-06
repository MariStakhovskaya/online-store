import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/main/Main';
import Basket from './components/basket/Basket';
import Page404 from './components/page404/Page404';
import DetailsProduct from './components/product/detailsProduct/DetailsProduct';
import { useDispatch, useSelector } from 'react-redux';
import { setReduxDucks } from './redux/slices/ducksSlice';
import {
  setSearchValue,
  sort,
  changeGender,
  changeCategoryType,
  changeView,
} from './redux/slices/filterSlice';
import {
  sortValue,
  searchValue,
  selectGender,
  categoryType,
  selectView,
} from './redux/selectors';
import qs from 'qs';
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
  const navigate = useNavigate();

  const sortPar = useSelector(sortValue);
  const searchPar = useSelector(searchValue);
  const genderPar = useSelector(selectGender);
  const categoryPar = useSelector(categoryType);
  const gridPar = useSelector(selectView);

  const genderParams = genderPar
    .filter((el) => el.isChecked === true)
    .map((el) => el.name);

  const gPar =
    genderParams.length === 2
      ? `${genderParams[0]} ${genderParams[1]}`
      : genderParams[0];

  const categoryParams = categoryPar
    .filter((el) => el.isChecked === true)
    .map((el) => el.name);

  const gCat =
    categoryParams.length !== 0 && categoryParams.length > 1
      ? categoryParams.reduce((acc, el) => acc + ` ${el}`, ' ')
      : categoryParams[0];

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      if (params.sort) {
        dispatch(sort(String(params.sort)));
      }
      if (params.gridView) {
        const valueGrid = String(params.gridView) === 'true' ? true : false;
        dispatch(changeView(valueGrid));
      }
      if (params.search) {
        dispatch(setSearchValue(String(params.search)));
      }
      if (params.gender) {
        const arr = String(params.gender).split(' ');
        const newValu = genderPar.map((el) => {
          if (arr.includes(el.name)) {
            return { ...el, isChecked: true };
          } else {
            return { ...el };
          }
        });
        dispatch(changeGender(newValu));
      }
      if (params.category) {
        const arr = String(params.category).split(' ');
        const newValu = categoryPar.map((el) => {
          if (arr.includes(el.name)) {
            return { ...el, isChecked: true };
          } else {
            return { ...el };
          }
        });
        dispatch(changeCategoryType(newValu));
      }
    }
  }, []);

  useEffect(() => {
    axios
      .get('https://631e4b429f946df7dc40b245.mockapi.io/ducks')
      .then((res) => {
        dispatch(setReduxDucks(res.data));
      });
  }, [dispatch]);

  useEffect(() => {
    const queryString = qs.stringify({
      sort: sortPar,
      search: searchPar,
      gender: gPar,
      category: gCat,
      gridView: gridPar,
    });

    queryString === 'sort=price_desc&search=&gridView=true'
      ? navigate('/')
      : navigate(`?${queryString}`);
  }, [sortPar, searchPar, gPar, gCat, gridPar, navigate]);

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
