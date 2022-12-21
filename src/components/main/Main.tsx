import styles from './Main.module.css';
import Product from '../product/Product';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.search__and__sort}>
        <input className={styles.search} placeholder="Поиск" />
        <select name="sort">
          <option> Сортировка 1 </option>
          <option> Сортировка 2 </option>
          <option> Сортировка 3 </option>
        </select>
        <div className={styles.grid}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
      <div className={styles.products__and__filters}>
        <div className={styles.filters}>
          <div className={styles.category}>
            <p> Категория </p>
            <div className={styles.check}>
              <Category />
              <Category />
              <Category />
            </div>
          </div>
          <div className={styles.brand}>
            <p> Пол </p>
            <div className={styles.check}>
              <Gender />
              <Gender />
            </div>
          </div>
          <div className={styles.price}>
            <p> Цена </p>
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
            <p> Наличие </p>
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
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
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

function Gender() {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <p> Пол </p>
      </label>
    </div>
  );
}

export default Main;
