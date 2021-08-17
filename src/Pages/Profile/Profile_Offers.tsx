import OfferItemRaw from "../../Components/OfferItemRaw";

interface Props {}

export const Profile_Offers: React.FC<Props> = (props) => {
  const receivedRawItems = [
    // { item: "Item", offer: "Offer" },
    { item: "Beach Please", offer: "1.38M" },
    { item: "Jessica #3330", offer: "3.33M" },
    { item: "Jessica #2338", offer: "2.89M" },
  ];
  const sentRawItems = [
    // { item: "Item", offer: "Offer" },
    { item: "Flying Cats", offer: "1.48M" },
    { item: "Mr Doge #2223", offer: "890K" },
    { item: "Patriots Win", offer: "890K" },
    { item: "Patriots Win", offer: "1.2B" },
    { item: "Criminals", offer: "Criminals" },
    { item: "Flying Toasters Revenge", offer: "3.49M" },
  ];
  return (
    <div className="profile_form">
      {/* offers section */}
      <h2
        className="p"
        style={{
          fontFamily: "Montserrat",
          margin: "1.5rem 0px",
        }}
      >
        Offers
      </h2>

      <div className="offers_contianer">
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              letterSpacing: "2px",
              width: "60%",
            }}
          >
            <h3 className="p">Sent</h3>
          </div>
          {sentRawItems.map((i, n) => (
            <OfferItemRaw key={n} item={i.item} offer={i.offer} />
          ))}
        </div>
        <div className="">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              letterSpacing: "2px",
              width: "60%",
            }}
          >
            <h3 className="p">Received</h3>
          </div>
          {receivedRawItems.map((i, n) => (
            <OfferItemRaw key={n} item={i.item} offer={i.offer} index={n} />
          ))}
        </div>
      </div>
    </div>
  );
};
