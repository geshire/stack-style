import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/typography/code/headers.html";
import typography from "typography.json";

const HeadersDocs = () => (
  <section>
    <SubHeader header="Headers" />
    <div>
      {typography.headers.map((key, index) => (
        <h1 className={`head-${index + 1} margin-bottom-small`}>Header {index + 1}</h1>
      ))}
    </div>
  </section>
);

const HeadersGuide = () => (
  <section id="view-typography-headers" className="row">
    <GuideBlock>
      <HeadersDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default HeadersGuide;
