import axios from "axios";

export default class AlertDao {
  addAlert({
    alertBorderColor,
    alertBackgroundColor,
    buttonBorderColor,
    buttonBackgroundColor,
    textColor,
    buttonTextColor,
  }) {
    return axios.post("/api/alert", {
      user: "Anonymous",
      alertName: "Untitled",
      textValues: {
        message: "Hello",
        button: "Okay",
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
