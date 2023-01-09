import styles from '../gender/Gender.module.css';
import { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeGender } from '../../redux/slices/filterSlice';
import { selectGender, selectDucksFiltered } from '../../redux/selectors';
import { RootState } from '../../redux/store';

function Gender() {
  const dispatch = useDispatch();
  const ducksData = useSelector(selectDucksFiltered);
  const prevDD = useSelector((state: RootState) => state.ducks.ducks);

  const genderR = useSelector(selectGender);
  const [check, setCheck] = useState(genderR);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const newValu = genderR.map((el) => {
      if (el.id === id) {
        return { ...el, isChecked: e.target.checked };
      } else {
        return { ...el };
      }
    });
    setCheck(newValu);
    dispatch(changeGender(newValu));
  };

  return (
    <div className={styles.check}>
      {genderR.map((item, index) => (
        <div className={styles.checkBlock} key={index}>
          <label key={index}>
            <input
              type="checkbox"
              onChange={(e) => handleChange(e, item.id)}
              value={item.name}
              checked={item.isChecked}
            />
            <p>{item.name}</p>
          </label>
          <span className={styles.categoryCount}>
            <span>
              {ducksData.filter((el) => el.gender === item.name).length}
            </span>
            <span> / </span>
            <span>{prevDD.filter((el) => el.gender === item.name).length}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Gender;
