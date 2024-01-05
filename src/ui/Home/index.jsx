import { Fragment } from "react";
import { Modal } from "../../components/Modal";
import { useMachine } from "@xstate/react";
import bookingMachine from "../../machines/bookingMachine";
import { BaseLayout } from "../../components/BaseLayout";
function HomeUI(props) {
  const [state, send] = useMachine(bookingMachine)
  return (
    <Fragment>
      <Modal headerTitle={"Assist Medic System"} send={send}>
        <BaseLayout state={state} send={send}/>
      </Modal>
      {props.children}
    </Fragment>
  );
}
export { HomeUI };
