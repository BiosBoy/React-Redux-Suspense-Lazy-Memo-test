import React, { memo } from 'react';
import styles from '../styles/index.scss';

const LoadingPlaceholder = () => {
  return (
    <div className={styles.loadingPlaceholder}>
      <span>Loading...</span>
    </div>
  );
};

export default memo(LoadingPlaceholder);
