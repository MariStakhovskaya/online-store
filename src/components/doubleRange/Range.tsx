import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxMinPrice } from '../../redux/slices/filterSlice';
import { selectDucksFiltered } from '../../redux/selectors';
import useDebounce from '../custom/hooks/useDebounse';

function Range() {
  //const min = useSelector(minV);
  //const max = useSelector(maxV);
  const ducksData = useSelector(selectDucksFiltered);
  const minArr = ducksData.map((el) => el.price);
  const min = Math.min(...minArr);
  const max = Math.max(...minArr);
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const debouncedValue = useDebounce<{
    minVal: number;
    maxVal: number;
  }>({ minVal, maxVal }, 200);
  const range = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const onChangeWith = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxVal - 1);
    setMinVal(value);
    minValRef.current = value;
  };

  const onChangeWithMax = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minVal + 1);
    setMaxVal(value);
    maxValRef.current = value;
  };

  useEffect(() => {
    dispatch(setMaxMinPrice({ min, max }));
  }, [min, max]);

  // Get min and max values when their state changes

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={onChangeWith}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={onChangeWithMax}
      />
    </>
  );
}

export default Range;
