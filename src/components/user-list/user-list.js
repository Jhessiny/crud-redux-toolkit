import { Grid } from "@mui/material";
import UserItem from "../user-item/user-item";

const UserList = ({ users }) => {
  return (
    <Grid container spacing={2} sx={{ padding: "40px 20px" }}>
      {users.map((user) => (
        <Grid item xs={6} md={4} key={user.id}>
          <UserItem user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
