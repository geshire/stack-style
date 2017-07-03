import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/fx/code/borders.html";

const BordersDocs = () => (
  <section>
    <SubHeader title="Borders" anchor="borders" />
    <div>
      <span className="inline-block padding-medium border margin-right-medium margin-bottom-medium">
        <span className="square-tag text--gray"><strong>Border All</strong></span>
      </span>
      <span className="inline-block padding-medium border-vert margin-right-medium margin-bottom-medium">
        <span className="square-tag text--gray"><strong>Border Vert.</strong></span>
      </span>
      <span className="inline-block padding-medium border-horz margin-right-medium margin-bottom-medium">
        <span className="square-tag text--gray"><strong>Border Horz.</strong></span>
      </span>
      <span className="inline-block padding-medium border-top margin-right-medium margin-bottom-medium">
        <span className="square-tag text--gray"><strong>Top</strong></span>
      </span>
      <span className="inline-block padding-medium border-bottom margin-right-medium margin-bottom-medium">
        <span className="square-tag text--gray"><strong>Bottom</strong></span>
      </span>
      <span className="inline-block padding-medium border-left margin-right-medium margin-bottom-medium">
        <span className="square-tag text--gray"><strong>Left</strong></span>
      </span>
      <span className="inline-block padding-medium border-right margin-right-medium margin-bottom-medium">
        <span className="square-tag text--gray"><strong>Right</strong></span>
      </span>
      <span className="inline-block padding-medium border-center text--gray">
        <strong className="bg-white padding-medium">Center</strong>
      </span>
    </div>

    <div>
      <span className="inline-block padding-medium border-all border--thick margin-right-medium margin-bottom-medium">
        <span className="text--gray">
          <strong>Thick</strong>
        </span>
      </span>
      <span className="inline-block padding-medium border-all border--thin margin-right-medium margin-bottom-medium">
        <span className="text--gray">
          <strong>Thin</strong>
        </span>
      </span>
      <span className="inline-block padding-medium border-all radius margin-right-medium margin-bottom-medium">
        <span className="text--gray"><strong>Radius</strong></span>
      </span>
    </div>
  </section>
);

const BordersGuide = () => (
  <section id="view-layout-borders" className="row">
    <GuideBlock>
      <BordersDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default BordersGuide;
