import styles from '../gender/Gender.module.css';
import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeGender } from '../../redux/slices/filterSlice';
import { selectGender, selectDucksFiltered } from '../../redux/selectors';
import { RootState } from '../../redux/store';

export function Gender() {
  const dispatch = useDispatch();
  const ducksData = useSelector(selectDucksFiltered);
  const prevDD = useSelector((state: RootState) => state.ducks.ducks);
  const gender: Array<string> = ['мальчик', 'девочка'];

  const genderR = useSelector(selectGender);

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
      {gender.map((item, index) => (
        <div className={styles.checkBlock} key={index}>
          <label key={index}>
            <input type="checkbox" onChange={handleChange} value={item} />
            <p>{item}</p>
          </label>
          <span className={styles.categoryCount}>
            <span>{ducksData.filter((el) => el.gender === item).length}</span>
            <span> / </span>
            <span>{prevDD.filter((el) => el.gender === item).length}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Gender;
