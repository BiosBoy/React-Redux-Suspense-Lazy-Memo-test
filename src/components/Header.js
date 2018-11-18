import React, { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/index.scss';

const Header = () => {
  return (
    <Fragment>
      <div className={styles.appHeader}>
        <div className={styles.buttonsContainer}>
          <Link to='/'>Home</Link>
          <Link to='/next/'>Next</Link>
        </div>
        <span>App Headers</span>
      </div>
    </Fragment>
  );
};

export default memo(Header);
