import React from 'react';
import styles from './Footer.module.css';
import github from '../../images/github_logo.png';
import rsschool from '../../images/rs_school_js.svg';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <p className={styles.logo}>
          Ducky<span>Duck</span>
        </p>
        <p> 2022 </p>
      </div>
      <div className={styles.links}>
        <img src={github} />
        <img src={github} />
        <img src={rsschool} />
      </div>
    </div>
  );
}

export default Footer;
