import React, { useEffect, useState } from "react";
import { alertDao } from "../../../context/persistentContext";
import { UserAlert } from "../../components/UserAlert";
import { Wrapper } from "../../components/Wrapper";

const UserAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  const getAlerts = async () => {
    const response = await alertDao.getAlerts();
    setAlerts(response.data);
  };

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <div className="bg-indigo-200 py-10">
      <Wrapper>
        <section className="grid grid-cols-3 gap-6">
          {alerts.map((alert) => (
            <UserAlert key={alert._id} {...alert} />
          ))}
        </section>
      </Wrapper>
    </div>
  );
};

export default UserAlerts;
