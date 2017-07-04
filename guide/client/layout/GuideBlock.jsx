import React from 'react';
import PropTypes from 'prop-types';

const GuideBlock = props => (
  <div className="col width-1-2 padding-large">
    <section className="guide-block padding-horz-large padding-vert-medium">
      {props.children}
    </section>
  </div>
);

GuideBlock.propTypes = {
  children: PropTypes.element,
};

export default GuideBlock;
