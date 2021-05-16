import React from "react";
import PropTypes from "prop-types";

export const UserAlert = ({ user, alertName, textValues, css, dimensions }) => {
  const { message, button } = textValues;
  const {
    alertBorderColor,
    alertBackgroundColor,
    buttonBorderColor,
    buttonBackgroundColor,
    textColor,
    buttonTextColor,
  } = css;

  const styles = {
    backgroundColor: alertBackgroundColor,
    border: `10px solid ${alertBorderColor}`,
    color: textColor,
  };

  if (dimensions) {
    const { alertHeight, alertWidth, alertBorderRadius, alertBorderWidth } =
      dimensions;
    styles.width = `${alertWidth}rem`;
    styles.height = `${alertHeight}rem`;
    styles.borderRadius = `${alertBorderRadius}%`;
    styles.borderWidth = `${alertBorderWidth}rem`;
  }

  const buttonStyles = {
    backgroundColor: buttonBackgroundColor,
    border: `10px solid ${buttonBorderColor}`,
    color: buttonTextColor,
  };

  return (
    <article className="inline-block">
      <h2>{alertName}</h2>
      <p>{user}</p>
      <div className="flex flex-col" style={styles}>
        <p>{message}</p>
        <button
          className="cursor-default mt-auto"
          disabled
          aria-disabled="true"
          style={buttonStyles}
        >
          {button}
        </button>
      </div>
    </article>
  );
};

UserAlert.propTypes = {
  user: PropTypes.string.isRequired,
  alertName: PropTypes.string.isRequired,
  textValues: PropTypes.exact({
    message: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }),
  css: PropTypes.exact({
    alertBorderColor: PropTypes.string.isRequired,
    alertBackgroundColor: PropTypes.string.isRequired,
    buttonBorderColor: PropTypes.string.isRequired,
    buttonBackgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    buttonTextColor: PropTypes.string.isRequired,
  }),
  dimensions: PropTypes.exact({
    alertHeight: PropTypes.number,
    alertWidth: PropTypes.number,
    alertBorderRadius: PropTypes.number,
    alertBorderWidth: PropTypes.number,
  }),
};
