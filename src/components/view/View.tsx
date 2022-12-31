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
      <div className={isGrid ? '' : styles.activeGrid}>
        <img src={gridView} alt="grid" onClick={onClickHandler} />
      </div>
      <div className={isGrid ? '' : styles.activeGrid}>
        <img src={listView} alt="list" onClick={onClickListHandler} />
      </div>
    </>
  );
}

export default View;
