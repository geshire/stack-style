import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavChildren from 'layout/NavChildren';
import settings from "settings.json";

const NavView = ({ guide }) => (
  <nav id="navigation">
    <h1 className="inline-block padding-top-medium padding-left-large">
      <i className={`${settings.logo.name} symbol--${settings.logo.size}`}>{settings.title}</i>
    </h1>
    <ul>
      {Object.keys(guide).map(key => (
        <li className="padding-horz-large margin-vert-large" key={key}>
          <h5 className="border-bottom border--thin border--gray-light margin-bottom-small padding-bottom-small">
            <Link className="text--blue text-3" to={guide[key].to}>
              {guide[key].title}
            </Link>
          </h5>
          <NavChildren childItems={guide[key].items} />
        </li>
      ))}
    </ul>
  </nav>
);

NavView.propTypes = {
  guide: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  guide: state.guide,
});

const mapDispatchToProps = dispatch => ({
});

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavView);

export default NavContainer;
