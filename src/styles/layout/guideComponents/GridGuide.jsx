import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/layout/code/grid.html";

const GridDocs = () => (
  <div className="margin-vert-large">
    <SubHeader title="Grid" anchor="grid" />
    <div className="row text-center">
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">1</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">2</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">3</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">4</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">5</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">6</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">7</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">8</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">9</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">10</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">11</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">12</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">13</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">14</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">15</span>
      </div>
      <div className="col width-1-16">
        <span className="padding-vert-large block bg-gray-xlight text-gray text--small">16</span>
      </div>
    </div>
  </div>
);

const GridGuide = () => (
  <section id="view-layout-grid" className="row">
    <GuideBlock>
      <GridDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default GridGuide;
