import { AlertFrame } from "../components/AlertFrame";
import { Wrapper } from "../components/Wrapper";
import { CreateAlertNav } from "../pages/CreateAlert/CreateAlertNav";

export const CreateAlertLayout = ({ children }) => {
  return (
    <div>
      <Wrapper>
        <CreateAlertNav />
      </Wrapper>
      <AlertFrame />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
