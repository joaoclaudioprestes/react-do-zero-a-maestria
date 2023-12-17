import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(15);

  return (
    <>
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 34)}>Clique para redefinir</button>
    </div>
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(1443)}>Clique para redefinir</button>
    </div>
    </>
  );
};

export default ManageData;
