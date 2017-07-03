import React from 'react';
import Header from 'layout/Header';
import HeadersGuide from 'styles/typography/guideComponents/HeadersGuide';
import CopyGuide from 'styles/typography/guideComponents/CopyGuide';
import ColorGuide from 'styles/typography/guideComponents/ColorGuide';

const Typography = () => (
  <div id="view-typography" className="fill-width row">
    <Header header="Typography" />
    <HeadersGuide />
    <CopyGuide />
    <ColorGuide />
  </div>
);

export default Typography;
