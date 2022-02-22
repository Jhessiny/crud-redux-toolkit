import { Button, Box, TextField } from "@mui/material";
import { editUser } from "../../store/features/users";
import { useDispatch } from "react-redux";
import { useState } from "react";

const EditForm = ({ id, username: initialUsername }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(initialUsername);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ id, username }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <TextField
          name="username"
          placeholder="Edit Username"
          size="small"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Edit
        </Button>
      </Box>
    </form>
  );
};

export default EditForm;
