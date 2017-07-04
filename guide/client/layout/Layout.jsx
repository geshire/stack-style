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
      <div>
        <NavContainer />
        <section id="stage" className="width-100 border-box" style={{ paddingLeft: "225px" }}>
          <Route exact path="/layout" component={GuideLayout} />
          <Route exact path="/fx" component={GuideFx} />
          <Route exact path="/elements" component={GuideElements} />
          <Route exact path="/typography" component={GuideTypography} />
          <Route exact path="/icons" component={GuideIcons} />
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
