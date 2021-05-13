import { Wrapper } from "../components/Wrapper";
import { CreateAlertNav } from "../pages/CreateAlert/CreateAlertNav";

export const CreateAlertLayout = ({ children }) => {
  return (
    <div>
      <Wrapper>
        <CreateAlertNav />
        {children}
      </Wrapper>
    </div>
  );
};
