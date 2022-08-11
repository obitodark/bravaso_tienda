const DetailsImagesBig = ({ index, producto }) => {
  return (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img
        src={`${producto}`}
        className="d-block w-100"
        alt="imagen de producto"
      />
    </div>
  );
};
export default DetailsImagesBig;
