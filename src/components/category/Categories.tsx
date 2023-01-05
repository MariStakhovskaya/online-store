import styles from '../category/Categories.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import { changeCategoryType } from '../../redux/slices/filterSlice';
import { categoryType, selectDucksFiltered } from '../../redux/selectors';
import { RootState } from '../../redux/store';

export function Categories() {
  const dispatch = useDispatch();
  const ducksData = useSelector(selectDucksFiltered);
  const prevDD = useSelector((state: RootState) => state.ducks.ducks);

  const categoryR = useSelector(categoryType);
  const category: Array<string> = [
    'senior',
    'middle',
    'junior',
    'student1',
    'trainee',
    'mentor',
  ];
  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let arr: string[] = [...categoryR];
    if (checked) {
      arr.push(value);
      dispatch(changeCategoryType(arr));
    } else {
      arr = categoryR.filter((categoryRed) => categoryRed !== value);
      dispatch(changeCategoryType(arr));
    }
  };
  return (
    <div className={styles.check}>
      {category.map((item, index) => (
        <div className={styles.checkBlock} key={index}>
          <label key={index}>
            <input
              type="checkbox"
              onChange={handleChangeCategory}
              value={item}
            />
            <p>{item}</p>
          </label>
          <span className={styles.categoryCount}>
            <span>{ducksData.filter((el) => el.category === item).length}</span>
            <span> / </span>
            <span>{prevDD.filter((el) => el.category === item).length}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Categories;
