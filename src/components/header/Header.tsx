import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-duckyduck.png';
import basket from '../../images/shopping-basket.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function Header() {
  const { ducks, totalPrice } = useSelector((state: RootState) => state.basket);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Логотип" />
          <h1>
            Ducky<span>Duck</span>
          </h1>
        </div>
        <div className={styles.basket}>
          <div>
            <Link to="basket">
              <img src={basket} alt="Корзина товаров" />
            </Link>
            <p className={styles.quantity}> {ducks.length} </p>
          </div>
          <p className={styles.counter}> {totalPrice} $ </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
