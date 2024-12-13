import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Appointment {
  name: string;
  hour: string;
  cpf: string;
  birthDate: string;
  address: string;
  totalAmount: string;
  payment: string;
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
    addNewAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointment = [...state.appointment, action.payload]; 
    },
    clearPatients: (state) => {
      state.appointment = [];
    },
  },
});

export const { addNewAppointment, clearPatients } = modalSlice.actions;

export default modalSlice.reducer;
