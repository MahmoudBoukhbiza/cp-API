import { useState, useEffect } from 'react'
import UserList from './UserList';
import axios from 'axios'


function App() {
  const [users, setusers] = useState([])
  const [error, seterror] = useState()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {

        setusers(response.data);
      })

      .catch(function (error) {
        seterror(error);
      })


  },
    [])

  return (
    <div className="App">
      <h1>Users list</h1>
      <UserList users={users}/>
    </div>
  );
}

export default App;
