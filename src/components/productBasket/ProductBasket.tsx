import { Button } from '../custom/button/Button';
import styles from './ProductBasket.module.css';
import { ProductType } from '../../App';

export type ProductDuckType = {
  duck: ProductType;
};

function ProductBasket({ duck }: ProductDuckType) {
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
          <Button name={'-'} callback={() => {}} />
          <p> 1 </p>
          <Button name={'+'} callback={() => {}} />
        </div>
        <div className={styles.price}> 125 $ </div>
      </div>
    </div>
  );
}

export default ProductBasket;
