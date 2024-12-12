import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faFileCircleCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import useReminderTable from "./useReminderTable";

const ReminderTable = () => {
  const { rows } = useReminderTable();
  return (
    <>
      <p style={{ textAlign: "start", width: "100%", color: "white" }}>
        Avisos/Lembretes
      </p>
      <div
        style={{
          width: "100%",
        }}
      >
        <Paper
          style={{
            width: "100%",
            height: "300px",
            overflowY: "auto",
            overflowX: "auto",
          }}
          sx={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#d3d3d3",
              borderRadius: "4px",
            },
          }}
        >
          <TableContainer style={{ overflowX: "unset" }}>
            <Table aria-label="simple table">
              <TableHead
                style={{
                  backgroundColor: "#11171d",
                  whiteSpace: "nowrap",
                  padding: "10px",
                }}
              >
                <TableRow>
                  <TableCell
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      borderRight: "1px solid rgba(61, 71, 81, 0.3)",
                      borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: "10px" }}
                    />
                    <span>E-mail</span>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      borderRight: "1px solid rgba(61, 71, 81, 0.3)",
                      borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFileCircleCheck}
                      style={{ marginRight: "10px" }}
                    />
                    <span>Status</span>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      borderRight: "1px solid rgba(61, 71, 81, 0.3)",
                      borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ marginRight: "10px" }}
                    />
                    <span>Data do convite</span>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                    }}
                  >
                    <span>Ações</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                style={{ whiteSpace: "nowrap", backgroundColor: "#182029" }}
              >
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        borderRight: "1px solid rgba(61, 71, 81, 0.3)",
                        borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                      }}
                      component="th"
                      scope="row"
                    >
                      {row.email}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        borderRight: "1px solid rgba(61, 71, 81, 0.3)",
                        borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        borderRight: "1px solid rgba(61, 71, 81, 0.3)",
                        borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                      }}
                    >
                      {/* Data do convite aqui */}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} title="Deletar convite" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </>
  );
};

export default ReminderTable;
