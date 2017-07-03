import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/typography/code/copy.html";
import RadioBlock from "components/RadioBlock";
// import Radio from "components/Radio";

const RadioDocs = () => (
  <section>
    <SubHeader anchor="radio" title="Radio" />
    <form className="form">
      {/* <Radio name="checkbox" /> */}
    </form>

    <SubHeader anchor="radio-block" title="Radio Block" />
    <form className="form">
      <RadioBlock
        color="white"
        name="foo"
        selected={{
          value: "me",
          label: "Me",
        }}
        options={{
          index: [1, 2, 3],
          data: {
            1: {
              value: "foo",
              label: "Foo",
            },
            2: {
              value: "me",
              label: "Me",
            },
            3: {
              value: "free",
              label: "Free",
            },
          },
        }}
      />
    </form>
  </section>
);

const RadioGuide = () => (
  <section id="view-elements-radio" className="row">
    <GuideBlock>
      <RadioDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default RadioGuide;
