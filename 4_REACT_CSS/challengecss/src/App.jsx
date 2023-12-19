import CarDetails from "./components/CarDetails";
function App() {
  const cars = [
    {
      id: "1",
      brand: "Mustang",
      img: "https://images.unsplash.com/photo-1610205296858-54032f054586?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      km: "0",
      newCar: true,
      price: "234.230",
    },
    {
      id: "1",
      brand: "BMW",
      img: "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      km: "0",
      newCar: true,
      price: "96.000",
    },
    {
      id: "1",
      brand: "Ferrari",
      img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      km: "0",
      newCar: true,
      price: "557.000",
    },
  ];

  return (
    <>
      <h1>Carros</h1>
      <div className="containerCars">
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            img={car.img}
            price={car.price}
            newCar={car.newCar}
          />
        ))}
      </div>
    </>
  );
}

export default App;
