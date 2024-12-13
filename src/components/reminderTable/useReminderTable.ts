import React from "react";

const useReminderTable = () => {
  const headers = [
    { key: "email", label: "E-mail" },
    { key: "status", label: "Status" },
    { key: "inviteDate", label: "Data do convite" },
  ];

  const rows = [
    {
      email: "user1@example.com",
      status: "Ativo",
      inviteDate: "2024-12-01",
    },
    {
      email: "user2@example.com",
      status: "Pendente",
      inviteDate: "2024-12-02",
    },

    {
      email: "user2@example.com",
      status: "Pendente",
      inviteDate: "2024-12-02",
    },

    {
      email: "user2@example.com",
      status: "Pendente",
      inviteDate: "2024-12-02",
    },

    {
      email: "user2@example.com",
      status: "Pendente",
      inviteDate: "2024-12-02",
    },
  ];

  return { headers, rows };
};

export default useReminderTable;
