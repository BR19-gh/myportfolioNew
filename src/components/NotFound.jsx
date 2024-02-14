/* eslint-disable react/prop-types */
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { connect } from "react-redux";

const NotFound = ({
  myPrimaryColor,
  setFlexDir,
  setFontSize,
  fontSize,
  setExpanded,
}) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setFlexDir("column");
      } else {
        setFlexDir("row");
      }
      if (window.innerWidth < 768) {
        setFontSize("sm");
      } else {
        setFontSize("lg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container
      onClick={() => {
        setExpanded(false);
      }}
      className="text-center showPage"
    >
      <Image
        style={{
          marginTop: fontSize === "lg" ? "-270px" : "100px",
          marginBottom: fontSize === "lg" ? "-130px" : "-80px",
          height: fontSize === "lg" ? "700px" : "300px",
        }}
        src="../../public/img/404errDark.png"
        alt="404 Error"
      />
      <div className="text-center">
        <h1
          style={{
            color: myPrimaryColor,
            fontSize: fontSize === "lg" ? "80px" : "35px",
          }}
        >
          Error 404 خطأ
        </h1>
        <p
          style={{
            fontSize: fontSize === "lg" ? "30px" : "15px",
          }}
        >
          الصفحة التي تبحث عنها غير موجودة
          <br />
          The page you are looking for does not exist
        </p>
      </div>
    </Container>
  );
};

const mapStateToProps = ({ myPrimaryColor }) => ({
  myPrimaryColor: myPrimaryColor.color,
});

export default connect(mapStateToProps)(NotFound);
