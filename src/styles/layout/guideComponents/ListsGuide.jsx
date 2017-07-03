import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/layout/code/lists.html";

const ListsDocs = () => (
  <section>
    <SubHeader title="Lists" anchor="lists" />
    <h1>Lists</h1>
    <ul className="list--striped">
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ul>
  </section>

);

const ListsGuide = () => (
  <section id="view-layout-lists" className="row">
    <GuideBlock>
      <ListsDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default ListsGuide;
