import styles from '../gender/Gender.module.css';
import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeGender } from '../../redux/slices/filterSlice';
import type { RootState } from '../../redux/store';

export function Gender() {
  const dispatch = useDispatch();

  const genderR = useSelector((state: RootState) => state.filter.genderType);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let arr: string[] = [...genderR];
    if (checked) {
      arr.push(value);
      dispatch(changeGender(arr));
    } else {
      arr = genderR.filter((category) => category !== value);
      dispatch(changeGender(arr));
    }
  };

  return (
    <div className={styles.check}>
      <label>
        <input type="checkbox" value="мальчик" onChange={handleChange} />
        <p> мальчик</p>
      </label>
      <label>
        <input type="checkbox" value="девочка" onChange={handleChange} />
        <p> девочка</p>
      </label>
    </div>
  );
}

export default Gender;
