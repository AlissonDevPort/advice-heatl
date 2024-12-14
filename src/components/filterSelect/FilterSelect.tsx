// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const FilterSelect = () => {
//   const appointments = useSelector(
//     (state: ReduxState) => state.modal.appointment
//   );
//   const dispatch = useDispatch();
//   const [selectedFilter, setSelectedFilter] = useState("index"); 


//   const handleFilterChange = (filter: string) => {
//     setSelectedFilter(filter);

    
//     let sortedAppointments = [...appointments];
//     if (filter === "name") {
//       sortedAppointments.sort((a, b) =>
//         a.name.localeCompare(b.name) 
//       );
//     }
//     dispatch(updateFilteredAppointments(sortedAppointments));
//   };

//   return (
//     <select
//       value={selectedFilter}
//       onChange={(e) => handleFilterChange(e.target.value)}
//       style={{
//         padding: "8px",
//         backgroundColor: "#11171d",
//         color: "white",
//         borderRadius: "4px",
//         marginBottom: "20px",
//       }}
//     >
//       <option value="index">Ordenar por Índice</option>
//       <option value="name">Ordenar por Nome</option>
//     </select>
//   );
// };

// export default FilterSelect;
