import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DelContainer, PencilContainer } from "./styles";

interface ReminderTableProps {
  headers: { key: string; label: string }[];
  rows: Record<string, any>[];
  onEditAppointment?: (index: number, updatedData: any) => void;
  onDeleteAppointment?: (index: number) => void;
  children?: React.ReactNode;
  shouldCloneSearch?: boolean; 
}
const ReminderTable: React.FC<ReminderTableProps> = ({
  headers,
  rows,
  onEditAppointment,
  onDeleteAppointment,
  children,
  shouldCloneSearch = false, 
}) => {
  const [filteredRows, setFilteredRows] = useState(rows);

  useEffect(() => {
    setFilteredRows(rows);
  }, [rows]);

  const handleSearch = (query: string) => {
    const filtered = rows.filter((row) =>
      row.name.toLowerCase().includes(query.toLowerCase()) 
    );
    setFilteredRows(filtered);
  };

  return (
    <>
       {shouldCloneSearch && children && React.isValidElement(children) && 
        React.cloneElement(children as React.ReactElement, {
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            handleSearch(event.target.value);
          },
        })
      }
      <p
        style={{
          textAlign: "start",
          width: "100%",
          color: "white",
          marginBottom: "10px",
        }}
      >
        Consultas
      </p>
      <div
        style={{
          width: "100%",
        }}
      >
        <Paper
          style={{
            width: "100%",
            height: "375px",
            overflowY: "auto",
            overflowX: "auto",
            backgroundColor: " rgb(24, 32, 41)",
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
            <Table aria-label="dynamic table">
              <TableHead
                style={{
                  backgroundColor: "#11171d",
                  whiteSpace: "nowrap",
                  padding: "10px",
                }}
              >
                <TableRow>
                  {headers.map((header, index) => (
                    <TableCell
                      key={index}
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        borderRight: "1px solid rgba(61, 71, 81, 0.3)",
                        borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                      }}
                    >
                      {header.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody
                style={{ whiteSpace: "nowrap", backgroundColor: "#182029" }}
              >
                {filteredRows.map((row, rowIndex: number) => (
                  <TableRow key={rowIndex}>
                    {headers.map((header, colIndex) => (
                      <TableCell
                        key={colIndex}
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          borderRight: "1px solid rgba(61, 71, 81, 0.3)",
                          borderBottom: "1px solid rgba(61, 71, 81, 0.3)",
                          textAlign: "start",
                          backgroundColor:
                            row[header.key] === "Sim"
                              ? "#04AA6D"
                              : row[header.key] === "Não"
                              ? "#ff0000"
                              : "transparent",
                        }}
                      >
                        {header.key === "actions" ? (
                          <>
                            <PencilContainer
                              onClick={() => {
                                onEditAppointment &&
                                  onEditAppointment(rowIndex, row);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faPencil}
                                style={{ marginRight: "8px" }}
                              />
                            </PencilContainer>
                            <DelContainer
                              onClick={() => {
                                onDeleteAppointment &&
                                  onDeleteAppointment(rowIndex);
                              }}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </DelContainer>{" "}
                          </>
                        ) : (
                          row[header.key]
                        )}
                      </TableCell>
                    ))}
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
