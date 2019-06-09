import React, { PureComponent } from 'react';
// import {}from 'prop-types';
import { withRouter } from 'react-router-dom';
import FeatureNav from './features/FeatureNav';
import Features from './Features';

const Layout = props => (
  <div>
    <FeatureNav {...props} />
    <Features {...props} />
  </div>
);

export default withRouter(Layout);
// export default Layout;
