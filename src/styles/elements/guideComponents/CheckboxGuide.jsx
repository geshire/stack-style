import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/elements/code/loaders.html";
import Checkbox from "components/Checkbox";

const CheckboxDocs = () => (
  <section>
    <SubHeader anchor="checkboxes" title="Checkbox" />
    <Checkbox name="checkboxField" label="Label" />
    <div />
  </section>
);

const CheckboxGuide = () => (
  <section id="view-elements-checkboxes" className="row">
    <GuideBlock>
      <CheckboxDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default CheckboxGuide;
