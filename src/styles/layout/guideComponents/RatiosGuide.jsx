import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/layout/code/lists.html";

const RatiosDocs = () => (
  <section>
    <SubHeader title="Ratios" anchor="ratios" />
  </section>
);

const RatiosGuide = () => (
  <section id="view-layout-lists" className="row">
    <GuideBlock>
      <RatiosDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default RatiosGuide;
