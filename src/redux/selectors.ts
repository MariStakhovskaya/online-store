import { createSelector } from 'reselect';
import { ProductType } from '../App';
import type { RootState } from './store';

export const sectAllDucks = (state: RootState) => state.ducks.ducks;
export const selectGender = (state: RootState) => state.filter.genderType;
export const searchValue = (state: RootState) => state.filter.searchValue;
export const sortValue = (state: RootState) => state.filter.sort;
export const categoryType = (state: RootState) => state.filter.categoryType;
export const selectView = (state: RootState) => state.filter.viewGrid;
export const countBasketduck = (state: RootState) => state.basket.ducks;
export const limitR = (state: RootState) => state.basket.limit;
export const currentPageR = (state: RootState) => state.basket.currentPage;

export const selectDucksFiltered = createSelector(
  [sectAllDucks, selectGender, searchValue, sortValue, categoryType],
  (allDucks, genderfilter, search, sort, category) => {
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
    const filterGenderFn = (duck: ProductType) => {
      const inputs = genderfilter
        .filter((gend) => gend.isChecked === true)
        .map((el) => el.name);
      if (inputs.includes(duck.gender)) {
        return true;
      } else {
        return false;
      }
    };
    const filterCategoryFn = (duck: ProductType) => {
      const inputs = category
        .filter((cat) => cat.isChecked === true)
        .map((el) => el.name);
      if (inputs.includes(duck.category)) {
        return true;
      } else {
        return false;
      }
    };

    return allDucks
      .filter((duck) =>
        category.filter((g) => g.isChecked === false).length === 6
          ? duck
          : filterCategoryFn(duck)
      )
      .filter((obj) => (search === ' ' ? obj : searchFunction(obj)))
      .filter((duck) =>
        genderfilter.filter((g) => g.isChecked === false).length === 2
          ? duck
          : filterGenderFn(duck)
      )
      .sort(sortFunction());
  }
);
