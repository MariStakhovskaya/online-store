import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-duckyduck.png';
import basket from '../../images/shopping-basket.png';

function Header() {
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
            <p className={styles.quantity}> 0 </p>
          </div>
          <p className={styles.counter}> 0,00 $ </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
