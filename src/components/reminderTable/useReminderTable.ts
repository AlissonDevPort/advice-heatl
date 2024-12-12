import React from "react";

interface EmailRow {
  email: string;
  name: string
}
const useReminderTable = () => {
  const rows: EmailRow[] = [
    { email: "alisson@teste.com" , name:"alisson"},
    { email: "anna@teste.com" , name:"anna"},
    { email: "danilo@teste.com" , name:"danilo"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    { email: "patrick@teste.com" , name:"patrick"},
    
  ];
  return { rows };
};

export default useReminderTable;
