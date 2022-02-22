import { Box } from "@mui/material";
import UserForm from "./components/user-form/user-form";
import { useSelector } from "react-redux";
import UserList from "./components/user-list/user-list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const userList = useSelector((state) => state.users.value);
  const notify = () => toast.success("Wow so easy!");

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#eee" }}>
      <UserForm />
      <UserList users={userList} />
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </Box>
  );
}

export default App;
