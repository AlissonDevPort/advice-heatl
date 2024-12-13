export const formatHour = (value: string): string => {
  return value
    .replace(/\D/g, "") 
    .replace(/^(\d{2})(\d{0,2})$/, "$1:$2") 
    .slice(0, 5); 
};

export const formatCpf = (value: string): string => {
  return value
    .replace(/\D/g, "") 
    .replace(
      /^(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})$/,
      (_, p1, p2, p3, p4) =>
        `${p1}${p2 ? `.${p2}` : ""}${p3 ? `.${p3}` : ""}${p4 ? `-${p4}` : ""}`
    ) 
    .slice(0, 14);
};
