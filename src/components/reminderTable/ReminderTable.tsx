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
    <div>
      <Paper
        style={{
          width: "100%",
          height: "300px",
          overflowY: "auto",
          overflowX: "auto",
          // "box-shadow": "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        <TableContainer style={{ overflowX: "unset" }}>
          <Table aria-label="simple table">
            <TableHead
              style={{
                backgroundColor: "#f3f4f5",
                whiteSpace: "nowrap",
              }}
            >
              <TableRow>
                <TableCell style={{ color: "black", fontWeight: "bold" }}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "10px" }}
                  />
                  <span>E-mail</span>
                </TableCell>
                <TableCell
                  style={{ color: "black", fontWeight: "bold" }}
                  align="center"
                >
                  <FontAwesomeIcon
                    icon={faFileCircleCheck}
                    style={{ marginRight: "10px" }}
                  />

                  <span>Status</span>
                </TableCell>

                <TableCell
                  style={{ color: "black", fontWeight: "bold" }}
                  align="center"
                >
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{ marginRight: "10px" }}
                  />
                  <span>Data do convite</span>
                </TableCell>

                <TableCell
                  style={{ color: "black", fontWeight: "bold" }}
                  align="center"
                >
                  <span>Ações</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ whiteSpace: "nowrap" }}>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    style={{ color: "black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    {row.email}
                  </TableCell>
                  <TableCell
                    style={{ color: "black", fontWeight: "bold" }}
                    align="center"
                  >
                    {row.name}
                    {/* {row.status === "pending" ? (
                                    <BadgesComponent
                                      text={"Pendente"}
                                      type={"warning"}
                                    />
                                  ) : (
                                    <BadgesComponent
                                      text={"Aceito"}
                                      type={"success"}
                                    />
                                  )} */}
                  </TableCell>
                  <TableCell
                    style={{ color: "black", fontWeight: "bold" }}
                    align="center"
                  ></TableCell>

                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    <FontAwesomeIcon icon={faTrash} title="Deletar convite" />
                    {/* <DelContainer
                      style={{ marginRight: "0px" }}
                      onClick={() => {
                        setDelModal(true);
                        setSelectedId(row);
                        }}
                        >
                        <FontAwesomeIcon icon={faTrash} title="Deletar convite" />
                    </DelContainer> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ReminderTable;
