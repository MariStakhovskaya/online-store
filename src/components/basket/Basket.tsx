import { Button } from '../custom/button/Button';
import ProductBasket from '../productBasket/ProductBasket';
import styles from './Basket.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ProductType } from '../../App';
import { useEffect, useState } from 'react';
import image404 from '../../assets/img/page404.png';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setQuery } from '../../redux/slices/basketSlice';

function Basket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setQuery({ ...params }));
    }
  }, []);

  const { ducks, totalPrice, limit, currentPage } = useSelector(
    (state: RootState) => state.basket
  );

  const [quantity, setQuantity] = useState(ducks.length);
  const [page, setPage] = useState(0);

  const changeValue = (value: number) => {
    setQuantity(value);
    dispatch(setQuery({ limit: value, currentPage: currentPage }));
  };

  const lessPage = () => {
    if (page > 0) {
      setPage(page - 1);
      dispatch(setQuery({ limit: limit, currentPage: page }));
    }
  };

  const morePage = () => {
    if (page < ducks.length / quantity - 1) {
      setPage(page + 1);
      dispatch(setQuery({ limit: limit, currentPage: page + 2 }));
    }
  };

  const displayList = (
    arrData: Array<ProductType>,
    quantityProducts: number,
    sheet: number
  ) => {
    const start = quantityProducts * sheet;
    const end = start + quantityProducts;
    const paginatedData = arrData.slice(start, end);
    return paginatedData;
  };

  useEffect(() => {
    const queryString = qs.stringify({
      limit,
      currentPage,
    });
    navigate(`?${queryString}`);
    console.log(queryString);
  }, [limit, currentPage]);

  if (ducks.length) {
    if (page + 1 > Math.ceil(ducks.length / quantity)) {
      setPage(page - 1);
      dispatch(setQuery({ limit: limit, currentPage: page }));
    }
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.total}>
            <p className={styles.name}> Ваши товары: </p>
            <span>
              {ducks.reduce((sum, duck) => {
                return duck.count + sum;
              }, 0)}
            </span>
            <p>
              (<span>{totalPrice} $</span>)
            </p>
          </div>
          <div className={styles.quantity__items}>
            <p> Товаров на странице: </p>
            <input
              type="number"
              onChange={(e) => {
                changeValue(parseInt(e.target.value));
              }}
              min="1"
              max={ducks.length}
              defaultValue={ducks.length}
              className={styles.quantity}
            />
          </div>
        </div>
        <div className={styles.products}>
          {ducks &&
            displayList(ducks, quantity, page).map((duck) => {
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
            <Button name={'<'} callback={lessPage} />
            <p className={styles.page}>
              {page + 1} / {Math.ceil(ducks.length / quantity)}
            </p>
            <Button name={'>'} callback={morePage} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <p className={styles.empty}> Корзина пуста! </p>
        <img
          src={image404}
          height="250px"
          alt="Уточка"
          className={styles.duck}
        />
      </div>
    );
  }
}

export default Basket;
