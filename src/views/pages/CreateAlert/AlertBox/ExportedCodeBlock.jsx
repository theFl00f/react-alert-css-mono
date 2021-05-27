import React from "react";
import PropTypes from "prop-types";

export const ExportedCodeBlock = ({ title, code }) => {
  return (
    <article className="prose prose-sm flex flex-col">
      <h2 className="mb-0">{title}</h2>
      <pre>
        <code className="prose">{code}</code>
      </pre>
    </article>
  );
};

ExportedCodeBlock.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
