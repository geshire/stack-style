import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/elements/code/loaders.html";

const LoadersDocs = () => (
  <section>
    <SubHeader anchor="loaders" title="Loaders" />
    <div />
  </section>
);

const LoadersGuide = () => (
  <section id="view-typography-headers" className="row">
    <GuideBlock>
      <LoadersDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default LoadersGuide;
