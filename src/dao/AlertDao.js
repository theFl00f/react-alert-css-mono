import axios from "axios";

export default class AlertDao {
  addAlert({
    alertBorderColor,
    alertBackgroundColor,
    buttonBorderColor,
    buttonBackgroundColor,
    textColor,
    buttonTextColor,
    message,
    buttonText,
    alertWidth,
    alertHeight,
    alertBorderRadius,
    alertBorderWidth,
    alertXPadding,
    alertYPadding,
    buttonXPadding,
    buttonYPadding,
    buttonBorderRadius,
    buttonBorderWidth,
  }) {
    return axios.post("/api/alert", {
      user: "Anonymous",
      alertName: "Untitled",
      textValues: {
        message,
        button: buttonText,
      },
      css: {
        alertBorderColor,
        alertBackgroundColor,
        buttonBorderColor,
        buttonBackgroundColor,
        textColor,
        buttonTextColor,
      },
      dimensions: {
        alertWidth,
        alertHeight,
        alertBorderRadius,
        alertBorderWidth,
        alertXPadding,
        alertYPadding,
        buttonXPadding,
        buttonYPadding,
        buttonBorderRadius,
        buttonBorderWidth,
      },
    });
  }

  getAlerts() {
    return axios.get("/api/alerts");
  }
}
