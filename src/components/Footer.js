import { PropTypes } from 'prop-types';
import React from 'react';
import styles from '../styles/index.scss';

const Footer = ({ countDoubl }) => {
  console.log(countDoubl, 'countDoubl Footer Func');

  return (
    <div className={styles.appFooter}>App Footer</div>
  );
};

Footer.propTypes = {
  countDoubl: PropTypes.number
};

Footer.defaultProps = {
  countDoubl: null
};

export default Footer;
