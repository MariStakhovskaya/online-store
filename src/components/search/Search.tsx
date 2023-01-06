import styles from './Search.module.css';
import { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import useDebounce from '../custom/hooks/useDebounse';
import { searchValue } from '../../redux/selectors';

function Search() {
  const searchValueRed = useSelector(searchValue);
  const [value, setValue] = useState(searchValueRed);
  const debouncedValue = useDebounce<string>(value, 400);
  const dispatch = useDispatch();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    dispatch(setSearchValue(value));
  }, [debouncedValue, value, dispatch]);

  return (
    <>
      <input
        className={styles.search}
        placeholder="Поиск"
        value={searchValueRed}
        onChange={onChangeHandler}
      />
    </>
  );
}

export default Search;
