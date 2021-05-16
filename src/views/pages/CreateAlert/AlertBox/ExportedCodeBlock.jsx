import React from "react";
import PropTypes from "prop-types";

export const ExportedCodeBlock = ({ title, code }) => {
  return (
    <article className="">
      <h2>{title}</h2>
      <pre>
        <code className="text-sm">{code}</code>
      </pre>
    </article>
  );
};

ExportedCodeBlock.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
