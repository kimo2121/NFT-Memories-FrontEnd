interface Props {
  label?: String;
  placeholder?: String;
  textArea?: Boolean;
  subheader?: String | any;
}

const InputField: React.FC<Props> = ({
  placeholder,
  label,
  textArea,
  subheader,
}) => {
  const inputStyle = {
    width: "100%",
    padding: "1rem",
    marginTop: "5px",
    borderRadius: "5px",
    fontSize: "1.1rem",
    fontFamily: "Montserrat",
    border: "1px solid lightgrey",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "90%",
        marginBottom: "1rem",
      }}
    >
      <h4 className="p" style={{ letterSpacing: "2px", fontWeight: "normal" }}>
        {label}
      </h4>
      {subheader && (
        <p
          className="p"
          style={{
            fontSize: ".8rem",
            letterSpacing: "1.2px",
            fontWeight: "bold",
            opacity: ".7",
          }}
        >
          {subheader}
        </p>
      )}
      {textArea ? (
        <textarea placeholder={`${placeholder}`} style={inputStyle}></textarea>
      ) : (
        <input type="text" style={inputStyle} placeholder={`${placeholder}`} />
      )}
    </div>
  );
};
export default InputField;
