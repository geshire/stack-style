import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/layout/code/lists.html";

const TablesDocs = () => (
  <section>
    <SubHeader title="Tables" anchor="tables" />
  </section>
);

const TablesGuide = () => (
  <section id="view-layout-lists" className="row">
    <GuideBlock>
      <TablesDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default TablesGuide;
