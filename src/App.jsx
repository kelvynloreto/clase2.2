import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Users } from "./components/Users";

function App() {
  const [user, setUser] = useState();
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();

  useEffect(() => {
    const URL = "https://randomuser.me/api/";
    axios
      .get(URL)
      .then((resp) => setUser(resp.data.results[0]))
      .catch((error) => console.log(error.message));
      axios
      .get(URL)
      .then((resp) => setUser1(resp.data.results[0]))
      .catch((error) => console.log(error.message));
      axios
      .get(URL)
      .then((resp) => setUser2(resp.data.results[0]))
      .catch((error) => console.log(error.message));
  }, []);

  // ?. encadenamiento opcinal
  console.log(user);
  return (
    <div className="App">
<Users  user= {user}/>
<Users  user= {user1}/>
<Users  user= {user2}/>
    </div>
  );
}

export default App;
