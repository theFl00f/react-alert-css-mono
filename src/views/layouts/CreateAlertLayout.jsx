import { AlertFrame } from "../components/AlertFrame";
import { CreateAlertNav } from "../pages/CreateAlert/CreateAlertNav";

export const CreateAlertLayout = ({ children }) => {
  return (
    <div>
      <CreateAlertNav />
      <AlertFrame />
      {children}
    </div>
  );
};
