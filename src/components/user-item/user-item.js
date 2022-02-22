import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import EditForm from "../edit-form/edit-form";

const UserItem = ({ user }) => {
  return (
    <Card>
      <CardHeader title={user.name} sx={{ py: 1 }} />
      <CardContent sx={{ py: 1 }}>
        <Typography>{user.username}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "10px",
        }}
      >
        <EditForm />
        <Button variant="contained" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserItem;
