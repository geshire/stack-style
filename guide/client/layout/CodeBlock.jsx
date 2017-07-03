import React from 'react';
import PropTypes from 'prop-types';

const CodeBlock = props => (
  <div className="col width-1-2">
    <section className="code-block padding-horz-large padding-vert-medium">
      {props.children}
    </section>
  </div>
);

CodeBlock.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CodeBlock;
