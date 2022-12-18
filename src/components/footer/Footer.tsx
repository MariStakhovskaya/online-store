import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.footer}>
          <p className={styles.logo}>
            Ducky<span>Duck</span>
          </p>
          <p> 2022 </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
