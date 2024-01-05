import { Fragment } from "react";
import { Modal } from "../../components/Modal";
import { Welcome } from "../../components/Steps/Welcome";
import { RegisterPatient } from "../../components/Steps/RegisterPatient";
function HomeUI(props) {
  return (
    <Fragment>
      <Modal headerTitle={"Assist Medic System"}>
        {/* <Welcome /> */}
        <RegisterPatient/>
      </Modal>
      {props.children}
    </Fragment>
  );
}
export { HomeUI };
