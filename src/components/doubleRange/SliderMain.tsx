import { useCallback } from 'react';
import Range from './Range';
import { useDispatch } from 'react-redux';
import { setMaxMinPrice } from '../../redux/slices/filterSlice';

export const Slider = () => {
  const dispatch = useDispatch();
  const onChangeWithUseCallBack = useCallback(
    ({ min, max }: { min: number; max: number }) => {
      dispatch(setMaxMinPrice({ min, max }));
    },
    [dispatch]
  );
  return (
    <div>
      <Range />
    </div>
  );
};
