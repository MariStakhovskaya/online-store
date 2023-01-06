import styles from './DetailsGender.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

type DetailsGenderProps = { id: number };

function DetailsGender(props: DetailsGenderProps) {
  const genderR = ['девочка', 'мальчик'];
  const ducks = useSelector((state: RootState) => state.ducks.ducks);

  return (
    <div className={styles.check}>
      {genderR.map((gender, index) => (
        <div className={styles.checkBlock} key={index}>
          <label key={index}>
            <input
              type="checkbox"
              checked={
                gender === ducks.find((duck) => duck.id === props.id)?.gender
              }
            />
            <p>{gender}</p>
          </label>
        </div>
      ))}
    </div>
  );
}

export default DetailsGender;
