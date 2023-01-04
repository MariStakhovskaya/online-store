import styles from './Search.module.css';
import { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import useDebounce from '../custom/hooks/useDebounse';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 400);
  const dispatch = useDispatch();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    dispatch(setSearchValue(value));
  }, [debouncedValue]);

  return (
    <>
      <input
        className={styles.search}
        placeholder="Поиск"
        value={value}
        onChange={onChangeHandler}
      />
    </>
  );
}

export default Search;
