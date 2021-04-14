import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import CurrentUser from '../../main/config/user';

const Footer = () => (


  <footer className="site-footer" style={{ display: (CurrentUser.CONNECTED_USER ? 'block' : 'none') }}>
    <div className="footer-inner bg-white">
      <div className="row">
        <div className="col-sm-6">
          Developed by <a href="https://github.com/aniskchaou">Anis KCHAOU</a>
        </div>
        <div className="col-sm-6 text-right">

        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
