import { ChangeEvent } from 'react';
import { sort } from '../../redux/slices/filterSlice';
import { sortValue } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

export function Sort() {
  const dispatch = useDispatch();

  const selectValue = useSelector(sortValue);

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sort(e.currentTarget.value));
  };
  return (
    <>
      <select name="sort" value={selectValue} onChange={onChangeSelect}>
        <option value="price_desc"> Цена (по убыванию) </option>
        <option value="price_asc"> Цена (по возрастанию) </option>
        <option value="raiting_desc"> Рейтинг (по убыванию)</option>
        <option value="raiting_asc"> Рейтинг (по возрастанию)</option>
      </select>
    </>
  );
}

export default Sort;
