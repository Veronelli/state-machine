import { Fragment } from "react";
import { Modal } from "../../components/Modal";
import { Welcome } from "../../components/Steps/Welcome";
function HomeUI(props) {
  return (
    <Fragment>
      <Modal>
        <Welcome />
      </Modal>
      {props.children}
    </Fragment>
  );
}
export { HomeUI };
