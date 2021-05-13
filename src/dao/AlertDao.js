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
    });
  }

  getAlerts() {
    return axios.get("/api/alerts");
  }
}
