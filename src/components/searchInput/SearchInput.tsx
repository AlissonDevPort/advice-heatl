import React from "react";
import { InputBase, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchInputProps {
  fullWidth: boolean;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ fullWidth, onChange }) => {
    const requestSearch = (value: string) => {
        onChange(value);
      };
  return (
    <div
      style={{
        marginBottom: "20px",
        boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        width: fullWidth ? "100%" : "",
        justifyContent: fullWidth ? "space-between" : "",
      }}
    >
      <InputBase
        type="text"
        placeholder="Pesquisar..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          requestSearch(event.target.value)
        }
        style={{
          margin: "auto 16px",
        }}
      />
      <IconButton type="button" aria-label="search">
        <FontAwesomeIcon icon={faSearch} size="sm" />
      </IconButton>
    </div>
  );
};

export default SearchInput;
