/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Typewriter } from "react-simple-typewriter";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { Tilt } from "react-tilt";
import { useNavigate } from "react-router-dom";
import sticker from "../../public/avatar/sticker.png";

const JobTitle = ({ myPrimaryColor, fontSize, lang }) => {
  return (
    <div className="mb-3" style={{ display: "flex" }}>
      <h4 style={{ fontSize: fontSize === "lg" ? "25px" : "16px" }}>
        {lang === "en" ? "and I'm a " : "وأنا "}&nbsp;
      </h4>
      <h4
        id="typewriter"
        style={{
          fontSize: fontSize === "lg" ? "25px" : "20px",
          color: myPrimaryColor,
          fontWeight: "bold",
          letterSpacing: lang === "ar" ? "0px" : "4px",
        }}
      >
        <Typewriter
          words={[
            lang === "en" ? "Fullstack Developer" : "مـطــور ويــب مـتـكــامـل",
            lang === "en" ? "Frontend Developer" : "مـطــور واجـهــات",
            lang === "en" ? "Backend Developer" : "مـطــور خـلـفـيــة",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </h4>
    </div>
  );
};

const Account = ({ name, icon, link, lang }) => (
  <div className={lang === "en" ? "circle-left" : "circle-right"}>
    <Button
      variant="dark"
      className={name}
      aria-label={name}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <i
        style={{
          fontSize: "25px",
          lineHeight: 1.5,
        }}
        className={icon}
      ></i>
    </Button>
  </div>
);

const AccountsSection = ({ accounts, lang }) => (
  <div className="circle-container">
    {Object.keys(accounts).map((account) => (
      <Account
        key={accounts[account].name}
        name={accounts[account].name}
        icon={accounts[account].icon}
        link={accounts[account].link}
        lang={lang}
      />
    ))}
  </div>
);

const AboutMeSection = ({ myPrimaryColor, fontSize, accounts, lang }) => {
  const navigate = useNavigate();
  return (
    <Col
      style={{
        marginTop: fontSize === "lg" ? "0%" : "10%",
        display: "flex",
        height: "70%",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <h1
        style={{ fontSize: fontSize === "lg" ? "55px" : "40px" }}
        className="mb-3"
      >
        {lang === "en" ? "Hello, World!" : "مرحبا بالعالم!"}
      </h1>
      <h1
        style={{ fontSize: fontSize === "lg" ? "35px" : "25px" }}
        className="mb-3"
      >
        {lang === "en" ? "I'm Ibrahim Alkhowaiter" : "أنا ابراهيم الخويطر"}
      </h1>
      <JobTitle
        lang={lang}
        fontSize={fontSize}
        myPrimaryColor={myPrimaryColor}
      />

      <Button
        id="about-me-btn"
        variant="dark"
        className="mb-4"
        style={{
          width: "155px",
        }}
        size="lg"
        onClick={() => {
          if (lang === "en") {
            navigate("/aboutme");
          } else {
            navigate("/aboutme/ar");
          }
        }}
      >
        {lang === "en" ? "About Me" : "عـنـــــي"}&nbsp;&nbsp;
        <i
          className={
            lang === "en"
              ? "fas fa-arrow-circle-right"
              : "fas fa-arrow-circle-left"
          }
        ></i>
      </Button>
      <AccountsSection lang={lang} accounts={accounts} />
    </Col>
  );
};

const ImageSection = ({ imageWidth }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <Col
      style={{
        textAlign: "center",
        height: "50%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tilt
        options={defaultOptions}
        style={{
          width: imageWidth,
          borderRadius: "40%",
        }}
      >
        <Image
          className="avatar"
          style={{
            width: "100%",
            borderRadius: "40%",
          }}
          src={sticker}
          alt="avatar"
        />
      </Tilt>
    </Col>
  );
};

const Dashboard = ({
  myPrimaryColor,
  setFlexDir,
  setFontSize,
  flexDir,
  fontSize,
  setExpanded,
  accounts,
  lang,
}) => {
  // const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1180) {
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

    // const handlePageLoad = () => {
    //   setPageLoaded(true);
    // };

    handleResize();

    window.addEventListener("resize", handleResize);
    // window.addEventListener("load", handlePageLoad);

    return () => {
      window.removeEventListener("resize", handleResize);
      //  window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <Container
      onClick={() => {
        setExpanded(false);
      }}
      id="dashboard-component"
      className="showPage"
      style={{
        display: "flex",
        flexDirection: flexDir,
        justifycontent: "center",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          width: flexDir === "row" ? "50%" : "100%",
          marginBottom: "50px",
        }}
      >
        <AboutMeSection
          lang={lang}
          accounts={accounts}
          myPrimaryColor={myPrimaryColor}
          flexDir={flexDir}
          fontSize={fontSize}
        />
      </Container>
      <Container style={{ width: flexDir === "row" ? "50%" : "100%" }}>
        <ImageSection imageWidth={flexDir === "row" ? "90%" : "80%"} />
      </Container>
    </Container>
  );
};

const mapStateToProps = ({ myPrimaryColor, accounts }) => ({
  myPrimaryColor: myPrimaryColor.color,
  accounts,
});

export default connect(mapStateToProps)(Dashboard);
