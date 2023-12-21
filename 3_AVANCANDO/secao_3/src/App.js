import './App.css';
import Flor from "./assets/plum-blossoms-7942343_1280.jpg"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CardDetails from './components/CardDetails';
import TestFragment from './components/TestFragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "João"
  const [userEmail] = useState("João C.")

  const cars = [
    { id: "1", brand: "Ferrari", color: "Preto", newCar: true },
    { id: "2", brand: "Kia", color: "Vermelho", newCar: true },
    { id: "4", brand: "Renault", color: "Verde", newCar: false },
  ]

  const users = [
    { id: "1", name: "João", age: 23, profession: "Programador" },
    { id: "2", name: "Matheus", age: 34, profession: "Bombeiro" },
    { id: "3", name: "Margaret", age: 43, profession: "CEO" },
    { id: "4", name: "Felipe", age: 17, profession: "Estudante" },
  ]

  function showMessage() {
    console.log("Evento de componente pai!")
  }

  const [message, setMessage] = useState("")

  const hadleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/* {Props} */}
      <ShowUserName name={name} email={userEmail} />
      {/* {Destructuring} */}
      <CardDetails brand="Ford" km={10012} color="Preto" />
      {/* {Reaproveitamento} */}
      <CardDetails brand="Fiat" km={23} color="Azul" newCar={true} />
      <CardDetails brand="Ronda" km={4343} color="Vermelho" newCar={true} />
      <CardDetails brand="VW" km={53} color="Branco" newCar={true} />
      {/*Imagem em public*/}
      <img src="/dom-8429773_1280.jpg" alt="Paisagem" />
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CardDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} />
      ))}
      {/*Imagem em src/assets*/}
      <img src={Flor} alt="" />
      <TestFragment />
      {/* Children prop */}
      <Container>
        <p>O contúdo do filho!</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lif*/}
      <Message message={message} />
      <ChangeMessageState hadleMessage={hadleMessage} />
      {/* Desafio 4*/}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} profession={user.profession} />
      ))}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} profession={user.profession} />
      ))}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} profession={user.profession} />
      ))}
    </div>
  );
}

export default App;
