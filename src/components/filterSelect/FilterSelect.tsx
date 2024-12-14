import React from "react";
import { useDispatch } from "react-redux";
import { sortAppointments } from "../../store/slices/modalSlice";

const FilterSelect: React.FC = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = event.target.value as "index" | "name";
    dispatch(sortAppointments(sortBy));
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="index">Ordenar por Índice</option>
        <option value="name">Ordenar por Nome</option>
      </select>
    </div>
  );
};

export default FilterSelect;
