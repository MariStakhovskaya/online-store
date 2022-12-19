import styles from './Main.module.css';
import Product from '../product/Product';
import { ProductType } from '../../App';

export type MainPropsType = {
  ducks: ProductType[];
};

function Main(props: MainPropsType) {
  return (
    <div className={styles.container}>
      <div className={styles.search__and__sort}>
        <input className={styles.search} placeholder="Поиск" />
        <select name="sort">
          <option> Сортировка 1 </option>
          <option> Сортировка 2 </option>
          <option> Сортировка 3 </option>
        </select>
      </div>
      <div className={styles.products__and__filters}>
        <div className={styles.filters}>
          <div className={styles.category}>
            <p> По категории </p>
            <div className={styles.check}>
              <Category />
              <Category />
              <Category />
            </div>
          </div>
          <div className={styles.brand}>
            <p> По гендеру </p>
            <div className={styles.check}>
              <Brand />
              <Brand />
            </div>
          </div>
          <div className={styles.price}>
            <p> По цене </p>
            <div className={styles.double__range}>
              <div className={styles.values}>
                <div className={styles.price__min}> 0 </div>
                <div className={styles.price__max}> 100 </div>
              </div>
              <div className={styles.range}></div>
              <input
                type="range"
                min="0"
                max="100"
                value="0"
                className={styles.range__left}
              />
              <input
                type="range"
                min="0"
                max="100"
                value="100"
                className={styles.range__right}
              />
            </div>
          </div>
          <div className={styles.ctock}>
            <p> По наличию </p>
            <div className={styles.double__range}>
              <div className={styles.values}>
                <div className={styles.price__min}> 0 </div>
                <div className={styles.price__max}> 100 </div>
              </div>
              <div className={styles.range}></div>
              <input
                type="range"
                min="0"
                max="100"
                value="0"
                className={styles.range__left}
              />
              <input
                type="range"
                min="0"
                max="100"
                value="100"
                className={styles.range__right}
              />
            </div>
          </div>
        </div>
        <div className={styles.products}>
          {props.ducks.map((duck) => {
            return <Product key={duck.id} duck={duck} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Category() {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <p> Категория </p>
      </label>
    </div>
  );
}

function Brand() {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <p> Гендер </p>
      </label>
    </div>
  );
}

export default Main;
