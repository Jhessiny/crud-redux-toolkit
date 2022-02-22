import { Box } from "@mui/material";
import UserForm from "./components/user-form/user-form";
import { useSelector } from "react-redux";
import UserList from "./components/user-list/user-list";
function App() {
  const userList = useSelector((state) => state.users.value);
  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#eee" }}>
      <UserForm />
      <UserList users={userList} />
    </Box>
  );
}

export default App;
