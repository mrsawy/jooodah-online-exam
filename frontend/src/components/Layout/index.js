import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

const Layout = ({ children  , isQuizStarted}) => {
  return (
    <Fragment>
      <Header isQuizStarted={isQuizStarted} />
      <main>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
