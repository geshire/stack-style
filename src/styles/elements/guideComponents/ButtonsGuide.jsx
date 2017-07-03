import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/typography/code/copy.html";
import elements from "elements.json";

const ButtonDocs = () => (
  <section>
    <div>
      <SubHeader anchor="buttons-colors" title="Colors" />
      {Object.keys(elements.buttons).map(color => (
        <button key={color} className={`btn-${color} margin-right-small margin-bottom-small`}>{color}</button>
      ))}
    </div>

    <div className="margin-top-large">
      <SubHeader anchor="buttons-size" title="Sizes" />
      <button className="btn-blue btn--small margin-bottom-small block">Small</button>
      <button className="btn-blue btn--medium margin-bottom-small block">Medium</button>
      <button className="btn-blue btn--large margin-bottom-small block">Large</button>
    </div>

    <div className="margin-top-large">
      <SubHeader anchor="buttons-processing" title="Processing State" />
      {Object.keys(elements.buttons).map(color => (
        <button key={color} className={`btn-${color} is-processing margin-right-small margin-bottom-small`}>{color}</button>
      ))}
    </div>

    <div className="margin-top-large">
      <SubHeader anchor="buttons-icons" title="Icons" />
      <button className={`btn-${Object.keys(elements.buttons)[0]} btn--medium icon-upload-white icon--left margin-bottom-small block`}>Left</button>
      <button className={`btn-${Object.keys(elements.buttons)[0]} btn--medium icon-upload-white icon--right margin-bottom-small block`}>Right</button>
      <button className={`btn-${Object.keys(elements.buttons)[0]} btn--medium icon-upload-white icon--center margin-bottom-small block`}>Center</button>
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
