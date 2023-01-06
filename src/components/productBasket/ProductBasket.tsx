import { Button } from '../custom/button/Button';
import styles from './ProductBasket.module.css';
import { ProductType } from '../../App';
import { useDispatch } from 'react-redux';
import { addDuck, removeDuck } from '../../redux/slices/basketSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export type ProductDuckType = {
  duck: ProductType;
};

function ProductBasket({ duck }: ProductDuckType) {
  const ducks = useSelector((state: RootState) => state.basket.ducks);
  const dispatch = useDispatch();

  const moreDuck = () => {
    dispatch(addDuck(duck));
  };
  const lessDuck = () => {
    dispatch(removeDuck(duck));
  };

  return (
    <div className={styles.container}>
      <div className={styles.counter}> {ducks.indexOf(duck) + 1} </div>
      <div className={styles.wrapperProduct}>
        <div>
          <img className={styles.imgProduct} src={duck.image} alt={duck.alt} />
        </div>
        <div className={styles.description}>
          <div className={styles.name}> {duck.name} </div>
          <div className={styles.line}></div>
          <div className={styles.descriptinBlock}>
            <div className={styles.desc}> {duck.description} </div>
            <div> В наличии: {duck.stock} </div>
            <div> Рейтинг: {duck.raiting} </div>
          </div>
        </div>
        <div>
          <div className={styles.btns}>
            <Button name={'-'} callback={lessDuck} />
            <p> {duck.count} </p>
            <Button name={'+'} callback={moreDuck} />
          </div>
          <div className={styles.price}> {duck.price * duck.count} $ </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBasket;
