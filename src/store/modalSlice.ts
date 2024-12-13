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
  payed:string
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
      console.log(index, data);
      state.appointment = state.appointment.map((appointment, i) =>
        i === index ? { ...appointment, ...data } : appointment
      );
    },
    clearPatients: (state) => {
      state.appointment = [];
    },
  },
});

export const { addNewAppointment, updateAppointment, clearPatients } =
  modalSlice.actions;

export default modalSlice.reducer;
