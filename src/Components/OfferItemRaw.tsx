interface Props {
  item: String;
  offer: String;
  index?: Number;
}

const OfferItemRaw: React.FC<Props> = ({ item, offer, index }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // letterSpacing: "2px",
        marginTop: "1.2rem",
        width: "250px",
      }}
    >
      <h4 className="p">{item} </h4>
      <h4 className="p">{offer} </h4>
    </div>
  );
};
export default OfferItemRaw;
