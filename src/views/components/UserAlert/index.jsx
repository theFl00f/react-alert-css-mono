export const UserAlert = ({ user, alertName, textValues, css }) => {
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

  const buttonStyles = {
    backgroundColor: buttonBackgroundColor,
    border: `10px solid ${buttonBorderColor}`,
    color: buttonTextColor,
  };

  return (
    <article className="inline-block">
      <h2>{alertName}</h2>
      <p>{user}</p>
      <div className="flex flex-col items-center" style={styles}>
        <p>{message}</p>
        <button
          className="cursor-default"
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
