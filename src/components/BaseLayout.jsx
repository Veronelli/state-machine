import React from "react";

import { Welcome } from "../components/Steps/Welcome";
import { RegisterPatient } from "../components/Steps/RegisterPatient";
import { SelectAppointment } from "../components/Steps/SelectAppointment";
import { FinishReservation } from "../components/Steps/FinishReservation";

function BaseLayout({state, send}) {
  const renderComponent = ()=>{
    if(state.matches('initial')){
      return <Welcome send={send}/>
    }
    if(state.matches('registerPatient')){
      return <RegisterPatient send={send}/>
    }
    if(state.matches('selectAppointment')){
      return <SelectAppointment send={send}/>
    }
    if(state.matches('finishReservation')){
      return <FinishReservation send={send}/>
    }
  }
  return <>{renderComponent()}</>
}

export { BaseLayout };
