import { createMachine } from "xstate";

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "initial",
    states: {
      initial: {
        on: {
          REGISTER: { target: "registerPatient", actions: "printWelcome" },
        },
      },
      registerPatient: {
        exit: "printExit",
        entry: "printEntry",
        on: {
          CONTIUNE: {
            target: "selectAppointment",
          },
          RESET: "initial",
        },
      },
      selectAppointment: {
        on: {
          DONE: "finishReservation",
          RESET: "initial",
        },
      },
      finishReservation: {
        on: {
          RESET: "initial",
        },
      },
    },
  },
  {
    actions: {
      printWelcome: () => {
        console.log("Print Home");
      },
      printEntry: () => {
        console.log("Print Entry");
      },
      printExit: () => {
        console.log("Print Exit");
      },
    },
  }
);

export default bookingMachine;
