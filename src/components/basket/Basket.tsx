import { Button } from '../custom/button/Button';
import ProductBasket from '../productBasket/ProductBasket';
import styles from './Basket.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ProductType } from '../../App';

function Basket() {
  const { ducks, totalPrice } = useSelector((state: RootState) => state.basket);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.total}>
          <p className={styles.name}> Ваши товары: </p>
          <span> {ducks.length} </span>
          <p>
            (<span>{totalPrice} $</span>)
          </p>
        </div>
        <div className={styles.quantity__items}>
          <p> Товаров на странице: </p>
          <input type="text" value="3" className={styles.quantity} />
        </div>
      </div>
      <div className={styles.products}>
        {ducks &&
          ducks.map((duck) => {
            return <ProductBasket key={duck.id} duck={duck} />;
          })}
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
