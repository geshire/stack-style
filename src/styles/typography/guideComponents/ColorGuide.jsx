import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/typography/code/copy.html";
import typography from "typography.json";

const ColorDocs = () => (
  <section>
    <SubHeader header="Colors" />
    <div>
      {Object.keys(typography.text.colors).map(key => (
        <p className={`text-1 text--${key} margin-bottom-medium`}>
          {key}
        </p>
      ))}
    </div>
  </section>
);

const ColorGuide = () => (
  <section id="view-typography-headers" className="row">
    <GuideBlock>
      <ColorDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default ColorGuide;
