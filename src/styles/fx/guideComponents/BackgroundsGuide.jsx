import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/fx/code/borders.html";
import fx from "fx.json";

const BackgroundsDocs = () => (
  <section>
    <SubHeader title="Backgrounds" anchor="backgrounds" />
    <div>
      {Object.keys(fx.backgrounds.colors).map(key => (
        <p className={`margin-right-small bg-${key} padding-medium inline-block`} style={{ width: "100px" }}>
          {key}
        </p>
      ))}
    </div>
  </section>
);

const BackgroundsGuide = () => (
  <section id="view-layout-borders" className="row">
    <GuideBlock>
      <BackgroundsDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default BackgroundsGuide;
