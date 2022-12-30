import { createSelector } from 'reselect';
import { ProductType } from '../App';
import type { RootState } from './store';

export const sectAllDucks = (state: RootState) => state.ducks.ducks;
export const selectGender = (state: RootState) => state.filter.genderType;
export const searchValue = (state: RootState) => state.filter.searchValue;
export const sortValue = (state: RootState) => state.filter.sort;

export const selectDucksFiltered = createSelector(
  [sectAllDucks, selectGender, searchValue, sortValue],
  (allDucks, genderfilter, search, sort) => {
    const sortFunction = () => {
      if (sort === 'price_desc') {
        return (a: ProductType, b: ProductType) => b.price - a.price;
      }
      if (sort === 'price_asc') {
        return (a: ProductType, b: ProductType) => a.price - b.price;
      }
      if (sort === 'raiting_desc') {
        return (a: ProductType, b: ProductType) => b.raiting - a.raiting;
      }
      if (sort === 'raiting_asc') {
        return (a: ProductType, b: ProductType) => a.raiting - b.raiting;
      }
    };
    const searchFunction = (obj: ProductType) => {
      if (
        obj.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        obj.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        obj.description
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        obj.gender.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        String(obj.price).includes(search) ||
        String(obj.raiting).includes(search) ||
        String(obj.stock).includes(search)
      ) {
        return true;
      } else {
        return false;
      }
    };
    if (genderfilter.length === 2 || genderfilter.length === 0) {
      return allDucks
        .filter((obj) => (search === ' ' ? obj : searchFunction(obj)))
        .sort(sortFunction());
    } else {
      if (genderfilter[0] === 'мальчик') {
        return allDucks
          .filter((duck) => duck.gender === 'мальчик')
          .filter((obj) => (search === ' ' ? obj : searchFunction(obj)))
          .sort(sortFunction());
      }
      if (genderfilter[0] === 'девочка') {
        return allDucks
          .filter((duck) => duck.gender === 'девочка')
          .filter((obj) => (search === ' ' ? obj : searchFunction(obj)))
          .sort(sortFunction());
      }
    }
  }
);
