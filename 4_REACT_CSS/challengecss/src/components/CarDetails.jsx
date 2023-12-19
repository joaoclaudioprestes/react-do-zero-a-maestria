import style from "./CarDetails.module.css"

const CarDetails = ({ brand, img, price, newCar }) => {
  return (
    <div className={style.boxCar}>
      <img src={img} alt={brand} />
      <div>
        <h2>{brand}</h2>
        <div>
          <p>R$ {price}</p>
          {newCar && <p>Novo</p>}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
