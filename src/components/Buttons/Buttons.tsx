import { useMovie } from "../../state/useMovie";
import { AcceptButton, RejectButton } from "./Buttons.style";

export const Buttons = () => {
  const { reject, accept } = useMovie();

  return (
    <>
      <RejectButton onClick={reject}>Reject</RejectButton>
      <AcceptButton onClick={accept}>Accept</AcceptButton>
    </>
  );
};
