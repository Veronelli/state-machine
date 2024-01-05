import { Fragment } from "react";
import { Modal } from "../../components/Modal";
import { Welcome } from "../../components/Steps/Welcome";
import { RegisterPatient } from "../../components/Steps/RegisterPatient";
import { SelectAppointment } from "../../components/Steps/SelectAppointment";
function HomeUI(props) {
  return (
    <Fragment>
      <Modal headerTitle={"Assist Medic System"}>
        {/* <Welcome /> */}
        {/* <RegisterPatient/> */}
        <SelectAppointment />
      </Modal>
      {props.children}
    </Fragment>
  );
}
export { HomeUI };
