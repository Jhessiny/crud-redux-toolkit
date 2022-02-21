import { Button, TextField } from "@mui/material";

const userForm = () => {
  return (
    <form>
      <TextField name="name" placeholder="Name" />
      <TextField name="username" placeholder="Username" />
      <Button>Add User</Button>
    </form>
  );
};

export default userForm;
