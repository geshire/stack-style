import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/typography/code/copy.html";
import typography from "typography.json";

const CopyDocs = () => (
  <section>
    <SubHeader header="Copy" />
    <div>
      {typography.text.sizes.map((key, index) => (
        <p className={`text-${index + 1} margin-bottom-medium`}>
          Text {index + 1}. Example paragraph.
        </p>
      ))}
    </div>
  </section>
);

const CopyGuide = () => (
  <section id="view-typography-headers" className="row">
    <GuideBlock>
      <CopyDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default CopyGuide;
