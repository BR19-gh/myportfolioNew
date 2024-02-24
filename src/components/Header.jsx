/* eslint-disable react/prop-types */

const Header = (props) => {
  return (
    <header
      style={{
        width: "100%",

        marginTop:
          props.flexDir === "column"
            ? props.fontSize === "sm"
              ? "20px"
              : "-60px"
            : "-90px",
        marginBottom: "30px",
      }}
      className="d-flex justify-content-center"
    >
      <h1>
        {props.icon}&nbsp;
        {props.lang === "en" ? props.text["en"][0] : props.text["ar"][0]}
      </h1>
      <h1 style={{ color: props.myPrimaryColor }}>
        {!props.text["space"] && props.lang === "ar" ? null : <a>&nbsp;</a>}
        {props.lang === "en" ? props.text["en"][1] : props.text["ar"][1]}
      </h1>
    </header>
  );
};

export default Header;
