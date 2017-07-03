import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/typography/code/copy.html";
import Select from "components/Select";
import SelectDate from "components/SelectDate";
// import SelectTime from "components/SelectTime";

const SelectDocs = () => (
  <section>
    <SubHeader anchor="select" title="Select" />
    <form className="form">
      <Select
        label="Choose option"
        selected={{
          value: "A",
        }}
        options={{
          index: [1, 2],
          data: {
            1: { label: "Option A", value: "A" },
            2: { label: "Option B", value: "B" },
          },
        }}
        name="selectStandard"
      />
    </form>

    <SubHeader anchor="select date" title="Select Date" />
    <form className="form">
      <SelectDate
        showLocalTimezone
        name="selectDate"
      />
    </form>
    {/* <SubHeader header="Select Time" />
    <form className="form">
      <SelectTime name="checkbox" />
    </form> */}
  </section>
);

const SelectGuide = () => (
  <section id="view-typography-headers" className="row">
    <GuideBlock>
      <SelectDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default SelectGuide;
