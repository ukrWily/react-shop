export function GoodsItem(props) {
  const { offerId, displayName, displayDescription, price, granted, onClick } =
    props;
  const noImage =
    "https://as2.ftcdn.net/v2/jpg/02/51/95/53/1000_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg";
  // console.log(granted[0]?.images);

  return (
    <div className="card" id={offerId}>
      <div className="card-image">
        <img
          src={
            granted[0]?.images.full_background ||
            granted[0]?.images.background ||
            granted[0]?.images.icon ||
            noImage
          }
          alt={displayName}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div
        className="card-action"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button className="btn" onClick={() => onClick(offerId)}>
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.finalPrice}$
        </span>
      </div>
    </div>
  );
}
