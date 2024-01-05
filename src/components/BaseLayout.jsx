import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachine from "../machines/bookingMachine";

import { Welcome } from "../components/Steps/Welcome";
import { RegisterPatient } from "../components/Steps/RegisterPatient";
import { SelectAppointment } from "../components/Steps/SelectAppointment";
import { FinishReservation } from "../components/Steps/FinishReservation";

function BaseLayout() {
  return <>Hola</>;
}

export { BaseLayout };
