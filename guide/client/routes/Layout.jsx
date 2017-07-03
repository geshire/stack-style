import React from "react";
import Header from "layout/Header";
import DisplayGuide from "styles/layout/guideComponents/DisplayGuide";
import GridGuide from "styles/layout/guideComponents/GridGuide";
import ListsGuide from "styles/layout/guideComponents/ListsGuide";
import PositionGuide from "styles/layout/guideComponents/PositionGuide";
import RatiosGuide from "styles/layout/guideComponents/RatiosGuide";
import SpacingGuide from "styles/layout/guideComponents/SpacingGuide";
import TablesGuide from "styles/layout/guideComponents/TablesGuide";
import UnitGuide from "styles/layout/guideComponents/UnitGuide";

const GuideLayout = () => (
  <div id="view-layout" className="fill-width row">
    <Header title="Layout" />
    <DisplayGuide />
    <GridGuide />
    <SpacingGuide />
    <PositionGuide />
    <ListsGuide />
    <TablesGuide />
    <RatiosGuide />
    <UnitGuide />
  </div>
);

GuideLayout.propTypes = {
};

export default GuideLayout;
