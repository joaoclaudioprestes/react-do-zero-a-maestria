const Challenge = () => {
  const numberOne = 23;
  const numberTwo = 24;

  const sumNumbers = () => {
    const sum = numberOne + numberTwo;
    console.log(sum);
  };

  return (
    <>
      <h2>Desafio 2</h2>
      <h4>
        O valor de {numberOne} + {numberTwo}
      </h4>
      <button onClick={sumNumbers}>Realizar soma!</button>
    </>
  );
};

export default Challenge;
