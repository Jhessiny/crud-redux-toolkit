import { TextField } from "@mui/material";

import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  input: {
    border: "1px solid #bbb",
    borderRadius: "3px",
    "&::placeholder": {
      color: "#fff",
    },
  },
});

const TextInput = (props) => {
  return <StyledTextField {...props} />;
};

export default TextInput;
