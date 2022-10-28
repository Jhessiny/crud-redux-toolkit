import { Box } from "@mui/material";
import UserForm from "./components/user-form/user-form";
import { useSelector } from "react-redux";
import UserList from "./components/user-list/user-list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";

function App() {
  const renderCount = useRef(0);
  const userList = useSelector((state) => state.users.value);
  const notify = () => toast.success("Wow so easy!");
  useEffect(() => (renderCount.current += 1));
  const user = {};

  const methodDoesNotExist = () => {
    user.name.oi = "oi";
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#eee" }}>
      <UserForm />
      {renderCount.current}
      <UserList users={userList} />
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      <button onClick={methodDoesNotExist}>Break the world</button>;
    </Box>
  );
}

export default App;
