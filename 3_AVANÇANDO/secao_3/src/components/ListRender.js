import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "João", "Pedro"]);

  const [users, setUsers] = useState([
    { id: 1, name: "João", age: 18 },
    { id: 2, name: "Matheus", age: 34 },
    { id: 3, name: "David", age: 56 },
  ]);

  const deleteRadom = () => {
    const randomNumber = Math.floor(Math.random() * users.length);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/*Método abaixo e sempre o mais utilizando...*/}
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.id}, {item.name}, {item.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRadom}>Delete</button>
    </>
  );
};

export default ListRender;