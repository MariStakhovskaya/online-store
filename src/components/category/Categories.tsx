import styles from '../category/Categories.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import { changeCategoryType } from '../../redux/slices/filterSlice';
import { categoryType, selectDucksFiltered } from '../../redux/selectors';

export function Categories() {
  const dispatch = useDispatch();
  const ducksData = useSelector(selectDucksFiltered);

  const mentor = ducksData.filter((el) => el.category === 'mentor').length;
  const senior = ducksData.filter((el) => el.category === 'senior').length;
  const middle = ducksData.filter((el) => el.category === 'middle').length;
  const junior = ducksData.filter((el) => el.category === 'junior').length;
  const student1 = ducksData.filter((el) => el.category === 'student1').length;
  const trainee = ducksData.filter((el) => el.category === 'trainee').length;

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
            <span>{item === 'mentor' ? `${mentor} / 4` : ''}</span>
            <span>{item === 'senior' ? `${senior} / 5` : ''} </span>
            <span> {item === 'trainee' ? `${trainee} / 6` : ''}</span>
            <span> {item === 'middle' ? `${middle} / 2` : ''}</span>
            <span> {item === 'junior' ? `${junior} / 3` : ''}</span>
            <span> {item === 'student1' ? `${student1} / 1` : ''}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Categories;
