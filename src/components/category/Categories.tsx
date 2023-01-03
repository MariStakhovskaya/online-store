import styles from '../category/Categories.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import { changeCategoryType } from '../../redux/slices/filterSlice';
import { categoryType } from '../../redux/selectors';
export function Categories() {
  const dispatch = useDispatch();

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
        <label key={index}>
          <input type="checkbox" onChange={handleChangeCategory} value={item} />
          <p>{item}</p>
        </label>
      ))}
    </div>
  );
}

export default Categories;
