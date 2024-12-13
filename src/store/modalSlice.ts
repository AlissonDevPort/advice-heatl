import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Appointment {
  index: number;
  name: string;
  hour: string;
  cpf: string;
  birthDate: string;
  address: string;
  totalAmount: string;
  payment: string;
  payed: string;
}

interface ModalState {
  appointment: Appointment[];
}

const initialState: ModalState = {
  appointment: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addNewAppointment: (
      state,
      action: PayloadAction<Omit<Appointment, "index">>
    ) => {
      const newIndex = state.appointment.length;
      const newAppointment = { ...action.payload, index: newIndex };
      state.appointment = [...state.appointment, newAppointment];
    },
    updateAppointment: (
      state,
      action: PayloadAction<{ index: number; data: Appointment }>
    ) => {
      const { index, data } = action.payload;
      state.appointment = state.appointment.map((appointment, i) =>
        i === index ? { ...appointment, ...data } : appointment
      );
    },
    deleteAppointment: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.appointment = state.appointment.filter(
        (appointment) => appointment.index !== index
      );
    },
    clearPatients: (state) => {
      state.appointment = [];
    },
  },
});

export const {
  addNewAppointment,
  updateAppointment,
  deleteAppointment,
  clearPatients,
} = modalSlice.actions;

export default modalSlice.reducer;
