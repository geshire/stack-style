import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/layout/code/display.html";

const DisplayDocs = () => (
  <div className="margin-vert-large">
    <SubHeader title="Display" anchor="display" />
    <div className="row text-left">
      <span className="text-center margin-vert-medium padding-vert-large block bg-gray-xlight text-gray text--small">
        Block
      </span>
      <span className="margin-vert-medium padding-medium inline bg-gray-xlight text-gray text--small">
        Inline Block
      </span>
      <span className="margin-vert-medium padding-medium inline bg-gray-xlight text-gray text--small">
        Inline Block
      </span>
      <span className="margin-vert-medium padding-medium inline bg-gray-xlight text-gray text--small">
        Inline Block
      </span>
    </div>
  </div>
);

const DisplayGuide = () => (
  <section id="view-layout-display" className="row">
    <GuideBlock>
      <DisplayDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default DisplayGuide;
