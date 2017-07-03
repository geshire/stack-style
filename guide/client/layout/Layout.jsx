import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import NavContainer from "layout/NavContainer";
import GuideLayout from "routes/Layout";
import GuideFx from "routes/Fx";
import GuideElements from "routes/Elements";
import GuideTypography from "routes/Typography";
import GuideIcons from "routes/Icons";

class Layout extends Component {
  componentDidUpdate() {
    if (this.props.location.hash) {
      document.querySelector(`${this.props.location.hash}`).scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="layout contain-page">
        <NavContainer />
        <section id="stage" className="fill-width">
          <div id="stage-container">
            <Route exact path="/layout" component={GuideLayout} />
            <Route exact path="/fx" component={GuideFx} />
            <Route exact path="/elements" component={GuideElements} />
            <Route exact path="/typography" component={GuideTypography} />
            <Route exact path="/icons" component={GuideIcons} />
          </div>
        </section>
      </div>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired,
};

export default withRouter(Layout);
