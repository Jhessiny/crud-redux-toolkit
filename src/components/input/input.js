import { TextField } from "@mui/material";

import { styled } from "@mui/material/styles";
import React from "react";

const StyledTextField = styled(TextField)({
  input: {
    border: "1px solid #bbb",
    borderRadius: "3px",
    "&::placeholder": {
      color: "#fff",
    },
  },
});

const TextInput = React.forwardRef(({ color, ...InputProps }, ref) => {
  if (color === "dark")
    return <StyledTextField {...InputProps} inputRef={ref} />;

  return <TextField {...InputProps} inputRef={ref} />;
});

export default TextInput;
