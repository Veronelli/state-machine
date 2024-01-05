import { Fragment } from "react";
import { Modal } from "../../components/Modal";
import { Welcome } from "../../components/Steps/Welcome";
function HomeUI(props) {
  return (
    <Fragment>
      <Modal headerTitle={"Assist Medic System"}>
        <Welcome />
      </Modal>
      {props.children}
    </Fragment>
  );
}
export { HomeUI };
