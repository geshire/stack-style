import React from "react";
import PropTypes from "prop-types";

const ImageUpload = ({ name, source, ratio, alt }) => (
  <fieldset className={`ratio ratio--${ratio}`}>
    <div className="ratio-content">
      <img alt={alt} src={source} />
      <input type="hidden" name={name} value={source} />
      <button
        className="btn-white absolute bottom right margin-medium z-low"
      >
        Upload
      </button>
    </div>
  </fieldset>
);


ImageUpload.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string,
  ratio: PropTypes.string,
  alt: PropTypes.string,
};

ImageUpload.defaultProps = {
  source: null,
  ratio: "9-16",
  alt: "Image",
  onChange() {},
};

export default ImageUpload;
