import { Button, Box } from "@mui/material";
import TextInput from "../input/input";
import { addUser } from "../../store/features/users";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const UserForm = () => {
  const nameInput = useRef(null);
  const usernameInput = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.trunc(Math.random() * Date.now());
    const newUser = {
      id,
      name: nameInput.current.value,
      username: usernameInput.current.value,
    };
    console.log(nameInput);
    dispatch(addUser(newUser));
  };

  return (
    <Box
      sx={{
        background: "#222",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", align: "center", gap: "10px" }}>
          <TextInput
            name="name"
            placeholder="Name"
            ref={nameInput}
            color="dark"
          />
          <TextInput
            name="username"
            placeholder="Username"
            ref={usernameInput}
            color="dark"
          />
          <Button type="submit" variant="contained">
            Add User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserForm;
