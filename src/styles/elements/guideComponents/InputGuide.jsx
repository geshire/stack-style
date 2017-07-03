import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/typography/code/copy.html";

const InputDocs = () => (
  <section>
    <SubHeader anchor="input" title="Input" />
    <form className="form">
      <input type="text" />
    </form>

    <SubHeader anchor="input-textarea" title="Textarea" />
    <form className="form">
      <textarea rows="10" />
    </form>
  </section>
);

const InputGuide = () => (
  <section id="view-typography-headers" className="row">
    <GuideBlock>
      <InputDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default InputGuide;
