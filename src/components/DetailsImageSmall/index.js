const DetailsImageSmall = ({ index, producto }) => {
  return (
    <button
      id="btn_image_carousel"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={`${index}`}
      className="active border border-dark"
      aria-current="true"
      aria-label={`Slide ${index + 1}`}
    >
      <img
        src={`${producto}`}
        className={`img-fluid d-block w-100 ${index === 0 ? "active" : ""}`}
        alt="imagen de producto"
      />
    </button>
  );
};
export default DetailsImageSmall;
