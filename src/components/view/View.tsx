import gridView from '../../assets/icon/grid_view.png';
import listView from '../../assets/icon/view_list.png';
import styles from './View.module.css';
type ViewType = {
  isGrid: boolean;
  setIsGrid: (isGrid: boolean) => void;
};

export function View({ isGrid, setIsGrid }: ViewType) {
  const onClickHandler = () => {
    setIsGrid(true);
  };
  const onClickListHandler = () => {
    setIsGrid(false);
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
