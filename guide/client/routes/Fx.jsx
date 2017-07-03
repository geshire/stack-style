import React from "react";
import Header from "layout/Header";
import BackgroundsGuide from "styles/fx/guideComponents/BackgroundsGuide";
import BordersGuide from "styles/fx/guideComponents/BordersGuide";

const GuideFx = () => (
  <div id="view-fx" className="fill-width row">
    <Header title="Fx" />
    <BackgroundsGuide />
    <BordersGuide />
  </div>
);

GuideFx.propTypes = {
};

export default GuideFx;
