import { PropTypes } from 'prop-types';
import React, { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/index.scss';

const Header = props => {
  const { countDoubl } = props;

  console.log(countDoubl, 'countDoubl Header Memo_Func');

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

Header.propTypes = {
  countDoubl: PropTypes.number
};

Header.defaultProps = {
  countDoubl: 0
};

export default memo(Header);
