interface Props {
  header: String;
  subheader: String | any;
  leftIcon: any;
  rightIcon: any;
}

export const CreateItemRaw: React.FC<Props> = ({
  header,
  subheader,
  leftIcon,
  rightIcon,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "stretch" }}>
          <p className="p" style={{ marginRight: "1rem" }}>
            {leftIcon}
          </p>
          <div className="">
            <h5 className="p">{header} </h5>
            <p className="p">{subheader} </p>
          </div>
        </div>
        <p style={{ marginRight: "2rem" }}>{rightIcon}</p>
      </div>
      <hr style={{ opacity: ".8", marginTop: "-5px" }} />
    </>
  );
};
