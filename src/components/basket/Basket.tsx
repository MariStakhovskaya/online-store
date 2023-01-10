import { Button } from '../custom/button/Button';
import ProductBasket from '../productBasket/ProductBasket';
import styles from './Basket.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ProductType } from '../../App';
import { useEffect, useState, useRef, ChangeEvent } from 'react';
import image404 from '../../assets/img/page404.png';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setCurrentPage, setLimit } from '../../redux/slices/basketSlice';

function Basket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMouted1 = useRef(false);

  //const currentPar = useSelector(currentPageR);
  //const limitPar = useSelector(limitR);
  const { ducks, totalPrice, limit, currentPage } = useSelector(
    (state: RootState) => state.basket
  );
  const [quantity, setQuantity] = useState(limit);
  const [page, setPage] = useState(currentPage - 1);

  useEffect(() => {
    if (window.location.hash) {
      const params = qs.parse(window.location.hash.substring(10));
      //dispatch(setQuery({ ...params }));
      if (params.currentPagePar) {
        console.log(params.currentPagePar);
        dispatch(setCurrentPage(Number(params.currentPagePar)));
        //dispatch(setLimit(Number(params.limit)));
      }
      if (params.limit) {
        console.log(params.limitPar);
        dispatch(setLimit(Number(params.limitPar)));
        //dispatch(setCurrentPage(Number(params.currentPage)));
      }
    }
    console.log(window.location.hash);
  }, [dispatch]);

  useEffect(() => {
    if (isMouted1.current) {
      const queryString = qs.stringify({
        limitPar: limit,
        currentPagePar: currentPage,
      });
      navigate(`/basket/?${queryString}`);
    }
    isMouted1.current = true;
  }, [limit, currentPage, navigate]);

  const changeValue = (value: number) => {
    setQuantity(value);
    dispatch(setLimit(value));
    //dispatch(setQuery({ limit: value, currentPage: currentPage }));
  };

  const lessPage = () => {
    if (page > 0) {
      setPage(page - 1);
      //dispatch(setQuery({ limit: limit, currentPage: page }));
      //dispatch(setLimit(limit));
      dispatch(setCurrentPage(page));
    }
  };

  const morePage = () => {
    if (page < ducks.length / quantity - 1) {
      setPage(page + 1);
      //dispatch(setQuery({ limit: limit, currentPage: page + 2 }));
      dispatch(setCurrentPage(page + 2));
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

  if (ducks.length) {
    if (page + 1 > Math.ceil(ducks.length / quantity)) {
      setPage(page - 1);
      //dispatch(setQuery({ limit: limit, currentPage: page }));
      dispatch(setCurrentPage(page));
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                changeValue(+e.currentTarget.value);
              }}
              min="1"
              max={ducks.length}
              value={limit}
              className={styles.quantity}
            />
          </div>
        </div>
        <div className={styles.products}>
          {ducks &&
            displayList(ducks, limit, currentPage - 1).map((duck) => {
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
              {currentPage} / {Math.ceil(ducks.length / quantity)}
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
