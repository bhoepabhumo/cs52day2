import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";

function App() {
  const users = useQuery(api.getUser.get);
  const addUser = useMutation(api.addUser.addUser);
  const [newUsername, setNewUsername] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");

  const handleClick = async () => {
    await addUser({ username: newUsername, password: "example"});
  };
  return (
    <div className="App">
      {users?.map(({ _id, username }) => <div key={_id}>{username}</div>)}
      <div>
        <button onClick={handleClick}>
          Add a new user  
        </button>
      </div>
      <div>
        <div>Create your account:</div>
        <div>Username <input value={newUsername} onChange={(event) => setNewUsername(event.target.value) } /></div>
        <div>Password <input value={newPassword} onChange={(event) => setNewPassword(event.target.value) } /></div>
      </div>
    </div>
  );
}
  export default App;