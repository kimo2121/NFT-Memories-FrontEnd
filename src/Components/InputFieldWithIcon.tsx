interface Props {
  label?: String;
  placeholder?: String;
  textArea?: Boolean;
  icon?: any;
}

const InputFieldWithIcon: React.FC<Props> = ({
  placeholder,
  label,
  textArea,
  icon,
}) => {
  const inputStyle = {
    width: "100%",
    padding: "1rem",
    marginTop: "5px",
    borderRadius: "5px",
    fontFamily: "Montserrat",
    border: "1px solid lightgrey",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "80%",
        marginBottom: "1rem",
      }}
    >
      <h4 className="p" style={{ letterSpacing: "2px" }}>
        {label}
      </h4>
      <div style={inputStyle}>
        <input
          type="text"
          placeholder={`${placeholder}`}
          style={{
            border: "none",
            outline: "none",
            fontSize: "1.1rem",
            width: "100%",
          }}
        />
        {icon}
      </div>
    </div>
  );
};
export default InputFieldWithIcon;
