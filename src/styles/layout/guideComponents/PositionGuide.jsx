import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/layout/code/lists.html";

const PositionDocs = () => (
  <section>
    <SubHeader title="Position" anchor="position" />
  </section>
);

const PositionGuide = () => (
  <section id="view-layout-lists" className="row">
    <GuideBlock>
      <PositionDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default PositionGuide;
