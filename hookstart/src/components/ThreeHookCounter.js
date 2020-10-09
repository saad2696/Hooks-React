import React, { useState } from "react";
function ThreeHookCounter() {
  const person = { fname: " ", lname: " " };
  //state variable can be array, object , boolean , number or string
  //use state does not automatically merge and update
  //u have to use spread operator 
  const [name, setName] = useState(person);
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.fname}
          onChange={(e) => setName({ ...name , fname: e.target.value })}
        ></input>
        <input
          type="text"
          value={name.lname}
          onChange={(e) => setName({ ...name , lname: e.target.value })}
        ></input>
        <h2>
          Your first name is {name.fname} and last name is {name.lname}{" "}
        </h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default ThreeHookCounter;
