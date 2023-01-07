import styles from './Main.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../product/Product';
import Categories from '../category/Categories';
import Gender from '../gender/Gender';
import Search from '../search/Search';
import Sort from '../sort/Sort';
import { selectDucksFiltered, selectView } from '../../redux/selectors';
import {
  setSearchValue,
  sort,
  changeGender,
  changeCategoryType,
  changeView,
} from '../../redux/slices/filterSlice';
import View from '../view/View';
import { Button } from '../custom/button/Button';

function Main() {
  const dispatch = useDispatch();
  const ducksData = useSelector(selectDucksFiltered);
  const allFind = ducksData.length;
  const isGrid = useSelector(selectView);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString());
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 400);
  };

  const resetSettings = () => {
    dispatch(sort('price_desc'));
    dispatch(changeView(true));
    dispatch(setSearchValue(''));
    dispatch(
      changeGender([
        { id: 1, name: 'девочка', isChecked: false },
        { id: 2, name: 'мальчик', isChecked: false },
      ])
    );
    dispatch(
      changeCategoryType([
        { id: 1, name: 'senior', isChecked: false },
        { id: 2, name: 'middle', isChecked: false },
        { id: 3, name: 'junior', isChecked: false },
        { id: 4, name: 'student1', isChecked: false },
        { id: 5, name: 'trainee', isChecked: false },
        { id: 6, name: 'mentor', isChecked: false },
      ])
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.search__and__sort}>
        <Search />
        <Sort />
        <div className={styles.grid}>
          <View />
        </div>
      </div>
      <div className={styles.products__and__filters}>
        <div className={styles.filters}>
          <div className={styles.category}>
            <p> Категория </p>
            <Categories />
          </div>
          <div className={styles.brand}>
            <p> Пол </p>
            <Gender />
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
          <div className={styles.allFind}>Всего найдено: {allFind}</div>
          <Button name={'Сбросить настройки'} callback={resetSettings} />
          <Button
            name={isCopied ? 'Скопирована' : 'Скопировать ссылку'}
            callback={copyToClipboard}
          />
        </div>
        <div className={isGrid ? styles.products : styles.listView}>
          {allFind === 0 ? (
            <div className={styles.nothingText}>Ничего не найдено</div>
          ) : (
            ducksData.map((duck) => {
              return <Product key={duck.id} duck={duck} isGrid={isGrid} />;
            })
          )}
          ;
        </div>
      </div>
    </div>
  );
}

export default Main;
