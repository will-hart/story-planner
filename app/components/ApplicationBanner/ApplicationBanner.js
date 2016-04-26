import React from 'react';

const styles = require('./ApplicationBanner.scss');

const ApplicationBanner = () => (
  <div className={styles.banner}>
    <h1 className={styles.logo}>Story Grid</h1>
  </div>
);

export default ApplicationBanner;
