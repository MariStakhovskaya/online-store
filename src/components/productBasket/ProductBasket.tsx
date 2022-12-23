import { Button } from '../custom/button/Button';
import styles from './ProductBasket.module.css';

function ProductBasket() {
  return (
    <div className={styles.wrapperProduct}>
      <div>
        <img
          className={styles.imgProduct}
          src="https://i.ibb.co/8m9STkd/fire1.jpg"
          alt="aaa"
        />
      </div>
      <div className={styles.description}>
        <div className={styles.name}> "Пожарник" </div>
        <div className={styles.line}></div>
        <div className={styles.descriptinBlock}>
          <div className={styles.desc}> Уточка для дедлайнов </div>
          <div> В наличии: 25 </div>
          <div> Рейтинг: 6 </div>
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
