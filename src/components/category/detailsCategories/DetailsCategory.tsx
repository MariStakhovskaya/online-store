import styles from './DetailsCategory.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

type DetailsCategoryProps = { id: number };

function DetailsCategory(props: DetailsCategoryProps) {
  const categoryR = [
    'senior',
    'middle',
    'junior',
    'student1',
    'trainee',
    'mentor',
  ];
  const ducks = useSelector((state: RootState) => state.ducks.ducks);

  return (
    <div className={styles.check}>
      {categoryR.map((category, index) => (
        <div className={styles.checkBlock} key={index}>
          <label key={index}>
            <input
              type="checkbox"
              checked={
                category ===
                ducks.find((duck) => duck.id === props.id)?.category
              }
              onChange={() => {}}
            />
            <p>{category}</p>
          </label>
        </div>
      ))}
    </div>
  );
}

export default DetailsCategory;
