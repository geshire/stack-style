import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/typography/code/copy.html";
import icons from "icons.json";

const ButtonDocs = () => (
  <section>
    <div className="margin-top-large">
      <SubHeader anchor="icons-colors" title="Colors" />
      <i className="icon-upload margin-right-small margin-bottom-small" />
      {Object.keys(icons.colors).map(color => (
        <i className={`icon-upload-${color} margin-right-small margin-bottom-small`} />
      ))}
    </div>

    <div>
      <SubHeader anchor="icons-sizes" title="Sizes" />
      {Object.keys(icons.sizes).map(size => (
        <i className={`icon-upload icon--${size} margin-right-small margin-bottom-small`} />
      ))}
    </div>

    <div className="margin-top-large">
      <SubHeader anchor="icons-library" title="Library" />
      {icons.list.map(icon => (
        <i className={`icon-${icon} margin-right-small margin-bottom-small`} />
      ))}
    </div>
  </section>
);

const ButtonGuide = () => (
  <section id="view-typography-headers" className="row">
    <GuideBlock>
      <ButtonDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default ButtonGuide;
