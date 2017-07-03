import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/layout/code/lists.html";

const SpacingDocs = () => (
  <section>
    <SubHeader title="Spacing" anchor="spacing" />
    <ul className="list--striped">
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ul>
  </section>

);

const SpacingGuide = () => (
  <section id="view-layout-lists" className="row">
    <GuideBlock>
      <SpacingDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default SpacingGuide;
