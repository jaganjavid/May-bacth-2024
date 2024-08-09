import React from "react"


function App() {


  const name = "Jagan";
  const age = 27;

  const users = [
    {id:1, text:"User 1"},
    {id:2, text:"User 2"},
    {id:3, text:"User 3"}
  ];


  return( 
    <div className="container">
      <h1>Name : {name.toUpperCase()}</h1>
      <p>age : {age}</p>

      <span>{5 + 5}</span>

      <h3>users length ({users.length})</h3>

      <ul>
        {users.map((user, index) => (
          <li key={user.id}>{user.text}</li>
        ))}
      </ul>
    </div>
  )
}


export default App


