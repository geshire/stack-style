import React from "react";
import Highlight from "react-highlight";
import CodeBlock from "layout/CodeBlock";
import GuideBlock from "layout/GuideBlock";
import SubHeader from "layout/SubHeader";
import Code from "styles/typography/code/copy.html";
import ImageUpload from "components/ImageUpload";

const MediaDocs = () => (
  <section>
    <SubHeader anchor="#" title="Image Upload" />
    <div style={{ width: "300px" }}>
      <ImageUpload
        alt="Image Uploaded"
        name="imageUploadField"
        source="https://goo.gl/TcJK6z"
      />
    </div>
  </section>
);

const MediaGuide = () => (
  <section id="view-elements-media" className="row">
    <GuideBlock>
      <MediaDocs />
    </GuideBlock>
    <CodeBlock>
      <div>
        <Highlight className="html">{Code}</Highlight>
      </div>
    </CodeBlock>
  </section>
);

export default MediaGuide;
