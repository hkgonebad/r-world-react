import promoImg from "/img/extras/2.png";

const Promo = () => {
  return (
    <div className="sWidget">
      <h4 className="wTitle">Promotional Offer</h4>
      <div className="wBox ">
        <a href="#!">
          <img src={promoImg} alt="" className="w-100" />
        </a>
      </div>
    </div>
  );
};

export default Promo;
