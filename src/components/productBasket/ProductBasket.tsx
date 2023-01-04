import { Button } from '../custom/button/Button';
import styles from './ProductBasket.module.css';
import { ProductType } from '../../App';
import { useState } from 'react';

export type ProductDuckType = {
  duck: ProductType;
};

function ProductBasket({ duck }: ProductDuckType) {
  const [count, setCount] = useState(1);

  const addDuck = () => {
    setCount(count + 1);
  };
  const dropDuck = () => {
    setCount(count - 1);
  };

  return (
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
          <Button name={'-'} callback={dropDuck} />
          <p> {count} </p>
          <Button name={'+'} callback={addDuck} />
        </div>
        <div className={styles.price}> {duck.price * count} $ </div>
      </div>
    </div>
  );
}

export default ProductBasket;
