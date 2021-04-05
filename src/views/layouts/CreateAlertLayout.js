import { CreateAlertNav } from "../pages/CreateAlert/CreateAlertNav";

export const CreateAlertLayout = ({ children }) => {
  return (
    <div>
      <CreateAlertNav />
      {children}
    </div>
  );
};
