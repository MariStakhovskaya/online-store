import { Button } from '../custom/button/Button';
import styles from './ProductBasket.module.css';
import { ProductType } from '../../App';
import { useState } from 'react';
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

  const [count, setCount] = useState(1);

  const moreDuck = () => {
    setCount(count + 1);
    dispatch(addDuck(duck));
  };
  const lessDuck = () => {
    setCount(count - 1);
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
            <p> {count} </p>
            <Button name={'+'} callback={moreDuck} />
          </div>
          <div className={styles.price}> {duck.price * count} $ </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBasket;
