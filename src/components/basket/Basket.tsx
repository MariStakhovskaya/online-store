import { Button } from '../custom/button/Button';
import ProductBasket from '../productBasket/ProductBasket';
import styles from './Basket.module.css';

function Basket() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.total}>
          <p className={styles.name}> Ваши товары: </p>
          <span> 3 </span>
          <p>
            (<span>375 $</span>)
          </p>
        </div>
        <div className={styles.quantity__items}>
          <p> Товаров на странице: </p>
          <input type="text" value="3" className={styles.quantity} />
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.product}>
          <div className={styles.count}> 1 </div>
          <ProductBasket />
        </div>
        <div className={styles.product}>
          <div className={styles.count}> 2 </div>
          <ProductBasket />
        </div>
        <div className={styles.product}>
          <div className={styles.count}> 3 </div>
          <ProductBasket />
        </div>
      </div>
      <div className={styles.btns}>
        <div>
          <button className={styles.buy}> КУПИТЬ </button>
          <p className={styles.promo__text}> ПРОМОКОД: </p>
          <input type="text" value="promoUtka" className={styles.promo} />
        </div>
        <div className={styles.navigation}>
          <Button name={'<'} callback={() => {}} />
          <p className={styles.page}> 1 </p>
          <Button name={'>'} callback={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default Basket;
