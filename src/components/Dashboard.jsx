/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { Tilt } from "react-tilt";
import { useNavigate } from "react-router-dom";
import sticker from "../../public/avatar/sticker.png";

const JobTitle = ({ myPrimaryColor, fontSize }) => {
  return (
    <div className="mb-3" style={{ display: "flex" }}>
      <h4 style={{ fontSize: fontSize === "lg" ? "30px" : "16px" }}>
        and I'm a&nbsp;
      </h4>
      <h4
        id="typewriter"
        style={{
          fontSize: fontSize === "lg" ? "30px" : "16px",
          color: myPrimaryColor,
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        <Typewriter
          options={{
            loop: true,
            delay: 75,
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(200)
              .changeDelay(40)
              .changeDeleteSpeed(3)
              .typeString("Fullstack Developer")
              .pauseFor(1000)
              .deleteChars(20)
              .pauseFor(100)
              .typeString("Frontend Developer")
              .pauseFor(1000)
              .deleteChars(18)
              .pauseFor(100)
              .typeString("Backend Developer")
              .pauseFor(1000)
              .deleteChars(18)
              .start();
          }}
        />
      </h4>
    </div>
  );
};

// const StatsSection = () => (
//   <Row>
//     <h3>Personal Stats</h3>

//     <Image
//       src="https://github-readme-stats.vercel.app/api/top-langs/?langs_count=5&username=BR19-gh&theme=nightowl&layout=donut-vertical"
//       alt="Top Langs"
//     />
//   </Row>
// );

const Account = ({ name, icon, link }) => (
  <div className="circle">
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

const ACCOUNTS = [
  {
    name: "github",
    icon: "fab fa-github",
    link: "https://github.com/BR19-gh",
  },
  {
    name: "linkedin",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/ibrahim-alkhowaiter-430b24203/",
  },
  {
    name: "email",
    icon: "fas fa-envelope",
    link: "mailto: Ibrahim-abdalaziz@hotmail.com",
  },
  {
    name: "whatsapp",
    icon: "fab fa-whatsapp",
    link: "https://wa.me/966500885115",
  },
];

const AccountsSection = () => (
  <div className="circle-container">
    {ACCOUNTS.map((account) => (
      <Account
        key={account.name}
        name={account.name}
        icon={account.icon}
        link={account.link}
      />
    ))}
  </div>
);

const AboutMeSection = ({ myPrimaryColor, fontSize }) => {
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
        style={{ fontSize: fontSize === "lg" ? "60px" : "40px" }}
        className="mb-3"
      >
        Hello, World!
      </h1>
      <h1
        style={{ fontSize: fontSize === "lg" ? "40px" : "25px" }}
        className="mb-3"
      >
        I'm Ibrahim Alkhowaiter
      </h1>
      <JobTitle fontSize={fontSize} myPrimaryColor={myPrimaryColor} />

      <Button
        id="about-me-btn"
        variant="dark"
        className="mb-4"
        style={{
          width: "155px",
        }}
        size="lg"
        onClick={() => {
          navigate("/aboutme");
        }}
      >
        About Me <i className="fas fa-arrow-circle-right"></i>
      </Button>
      <AccountsSection />
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
}) => {
  // const [pageLoaded, setPageLoaded] = useState(false);

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

const mapStateToProps = ({ myPrimaryColor, loadingBar }) => ({
  myPrimaryColor: myPrimaryColor.color,
  loadingBar: loadingBar.default,
});

export default connect(mapStateToProps)(Dashboard);
