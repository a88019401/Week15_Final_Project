import React from 'react';
import styles from '../../styles/nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.width}>
        <div className={styles.logo}>
          <a href="#">Javascript<span>Project</span></a>
        </div>
        <ul className={styles.menu}>
          <li>
            <a href="#">課堂實作</a>
            <ul>
              <li className={styles.firstli}><a href="#">W07</a></li>
              <li><a href="#">W08</a></li>
              <li><a href="#">W09</a></li>
              <li><a href="#">W11</a></li>
              <li><a href="#">W13</a></li>
              <li className={styles.lastli}><a href="#">W15</a></li>
            </ul>
          </li>
          <li><a href="./project">7Cards</a></li>
          <li><a href="./project/meals">FindMeals</a></li>
          <li><a href="https://covid19-website-omega.vercel.app/">COVID-19</a></li>
          <li><a href="https://js-portfolio-framer-motion-909410028.vercel.app/">Animation</a></li>
        </ul>
      </div>
    </nav>
  );
}
