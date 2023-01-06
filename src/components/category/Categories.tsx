import styles from '../category/Categories.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { changeCategoryType } from '../../redux/slices/filterSlice';
import { categoryType, selectDucksFiltered } from '../../redux/selectors';
import { RootState } from '../../redux/store';

export function Categories() {
  const dispatch = useDispatch();
  const ducksData = useSelector(selectDucksFiltered);
  const prevDD = useSelector((state: RootState) => state.ducks.ducks);

  const categoryR = useSelector(categoryType);

  const [check, setCheck] = useState(categoryR);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const newValu = categoryR.map((el) => {
      if (el.id === id) {
        return { ...el, isChecked: e.target.checked };
      } else {
        return { ...el };
      }
    });
    setCheck(newValu);
    dispatch(changeCategoryType(newValu));
  };
  return (
    <div className={styles.check}>
      {categoryR.map((item, index) => (
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
              {ducksData.filter((el) => el.category === item.name).length}
            </span>
            <span> / </span>
            <span>
              {prevDD.filter((el) => el.category === item.name).length}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Categories;
