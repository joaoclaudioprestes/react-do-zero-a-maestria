const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativou o botão!");
  };

  const renderSomething = (x) => {
    if(x) {
        return <h3>Renderizado IF</h3>
    }else {
        return <h3>Renderizado Else</h3>
    }
  }

  return (
    <div>
      <button onClick={handleMyEvent}>Clique aqui!!</button>
      <button onClick={() => console.log("Ok")}>Clique aqui também!</button>

      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};
export default Events;
