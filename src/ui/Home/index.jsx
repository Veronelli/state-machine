import { Fragment } from "react";
import { Modal } from "../../components/Modal";
import { BaseLayout } from "../../components/BaseLayout";
function HomeUI(props) {
  return (
    <Fragment>
      <Modal headerTitle={"Assist Medic System"}>
        {/* <Welcome /> */}
        {/* <RegisterPatient/> */}
        {/* <SelectAppointment /> */}
        {/* <FinishReservation/> */}
        <BaseLayout />
      </Modal>
      {props.children}
    </Fragment>
  );
}
export { HomeUI };
