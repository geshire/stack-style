import React from "react";
import Header from "layout/Header";
import ButtonsGuide from "styles/elements/guideComponents/ButtonsGuide";
import LoadersGuide from "styles/elements/guideComponents/LoadersGuide";
import MediaGuide from "styles/elements/guideComponents/MediaGuide";
import SelectGuide from "styles/elements/guideComponents/SelectGuide";
import InputGuide from "styles/elements/guideComponents/InputGuide";
import CheckboxGuide from "styles/elements/guideComponents/CheckboxGuide";
import RadioGuide from "styles/elements/guideComponents/RadioGuide";

const GuideElements = () => (
  <div id="view-elements" className="fill-width row">
    <Header title="Elements" />
    <ButtonsGuide />
    <LoadersGuide />
    <MediaGuide />
    <SelectGuide />
    <InputGuide />
    <CheckboxGuide />
    <RadioGuide />
    {/*
    <Modal />
    <Sidebar />
    <TextToolbar /> */}
  </div>
);

GuideElements.propTypes = {
};

export default GuideElements;
