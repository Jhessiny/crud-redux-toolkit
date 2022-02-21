import { Button, Box } from "@mui/material";
import TextInput from "../input/input";

const UserForm = () => {
  return (
    <Box
      sx={{
        background: "#222",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form>
        <Box sx={{ display: "flex", align: "center", gap: "10px" }}>
          <TextInput name="name" placeholder="Name" />
          <TextInput name="username" placeholder="Username" />
          <Button variant="contained">Add User</Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserForm;
