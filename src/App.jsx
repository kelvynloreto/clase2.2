import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Users } from "./components/Users";

function App() {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   const URL = "https://randomuser.me/api/";
  //   axios
  //     .get(URL)
  //     .then((resp) => setUser(resp.data.results[0]))
  //     .catch((error) => console.log(error.message));
      
  // }, []);

  // ?. encadenamiento opcinal
  console.log(user);
  return (
    <div className="App">
<Users />


<Users />

    </div>
  );
}

export default App;
