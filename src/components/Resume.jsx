/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import ResumePDF from "../../public/Ibrahim_Alkhowaiter_Resume.pdf";
import { Tilt } from "react-tilt";
import Button from "react-bootstrap/Button";
import Header from "./Header";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 2, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Resume = ({
  myPrimaryColor,
  setFlexDir,
  setFontSize,
  flexDir,
  fontSize,
  setExpanded,
  lang,
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
      className="d-flex flex-wrap justify-content-center showPage"
    >
      <Header
        icon={<i className="fas fa-file"></i>}
        text={{
          en: ["My", "Resume"],
          ar: ["السيرة", "الذاتية"],
          space: true,
        }}
        flexDir={flexDir}
        fontSize={fontSize}
        lang={lang}
        myPrimaryColor={myPrimaryColor}
      />

      <Container
        className="d-flex justify-content-center"
        style={{ width: "100%" }}
      >
        <Tilt
          id="PdfDiv"
          options={defaultOptions}
          style={{
            width: "19rem",
          }}
        >
          <Document file={ResumePDF}>
            <Page pageNumber={1} />
          </Document>
        </Tilt>
      </Container>
      <Button
        style={{ marginTop: "20px" }}
        onClick={() => {
          window.open(ResumePDF, "_blank");
        }}
        id="projects-btn"
        variant="dark"
      >
        {lang === "en" ? "Open Resume" : "افتح السيرة"}
      </Button>
    </Container>
  );
};

const mapStateToProps = ({ myPrimaryColor }) => ({
  myPrimaryColor: myPrimaryColor.color,
});

export default connect(mapStateToProps)(Resume);
