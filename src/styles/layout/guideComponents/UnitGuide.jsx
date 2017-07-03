import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/layout/code/unit.html";

const UnitDocs = () => (
  <SubHeader title="Unit" anchor="unit" />
);

const UnitGuide = () => (
  <section id="view-layout-media" className="row">
    <GuideBlock>
      <UnitDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default UnitGuide;
