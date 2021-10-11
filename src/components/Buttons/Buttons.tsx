import { AcceptButton, RejectButton } from "./Buttons.style";

export const Buttons = () => {
  const remove = () => {};
  return (
    <>
      <RejectButton onClick={() => remove()}>Reject</RejectButton>
      <AcceptButton onClick={() => remove()}>Accept</AcceptButton>
    </>
  );
};
