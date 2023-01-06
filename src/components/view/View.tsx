import styles from './View.module.css';
import { changeView } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectView } from '../../redux/selectors';

export function View() {
  const dispatch = useDispatch();
  const isGrid = useSelector(selectView);
  const onClickHandler = () => {
    //setIsGrid(true);
    dispatch(changeView(true));
  };
  const onClickListHandler = () => {
    //setIsGrid(false);
    dispatch(changeView(false));
  };
  return (
    <>
      <div className={isGrid ? styles.activeGrid : ''}>
        <div onClick={onClickHandler} className={styles.squares}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={isGrid ? '' : styles.activeGrid}>
        <div onClick={onClickListHandler} className={styles.lines}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default View;
