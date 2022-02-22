import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteUser } from "../../store/features/users";
import EditForm from "../edit-form/edit-form";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (user.id) dispatch(deleteUser(user.id));
    toast.success("User delete with success!");
  };

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
        <EditForm username={user.username} id={user.id} />
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserItem;
