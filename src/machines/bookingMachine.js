import { createMachine } from 'xstate';

const bookingMachine = createMachine({
  id: 'buy plane tickets',
  initial: 'initial',
  states: {
    initial: {
      on: {
        REGISTER: 'registerPatient'
      }
    },
    registerPatient: {
      on: {
        CONTIUNE: 'selectAppointment',
        RESET: 'initial'
      }
    },
    selectAppointment: {
      on: {
        DONE: 'finishReservation',
        RESET: 'initial'
      }
    },
    finishReservation: {
      on: {
        RESET: 'initial'
      }
    },
  }
})

export default bookingMachine